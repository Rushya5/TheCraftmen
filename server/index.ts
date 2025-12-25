import express, { type Request, Response, NextFunction } from "express";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

let _initialized = false;

/**
 * Initialize routes and middlewares that are required before handling requests.
 * This does NOT start the HTTP listener so it is safe to call from serverless
 * environments (Vercel, Netlify Functions, etc.). Call `start()` to also
 * start the server when running as a standalone process.
 */
export async function init() {
  if (_initialized) return;

  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  _initialized = true;
}

/**
 * Start the full server (routes + static/vite + listening). Only call this
 * when running the app as a process (e.g. `node server/index.ts` or `npm run dev`).
 */
export async function start() {
  await init();

  // setup vite in development or static serving in production
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(port, "0.0.0.0", () => {
      console.log(`serving on port ${port}`);
    });
}

export default app;

// ESM-safe check for whether this module was run directly
const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
  // when run directly we start the server
  start().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
