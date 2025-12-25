import serverless from "serverless-http";
import app, { init } from "../server/index";

let initialized: Promise<void> | null = null;
let handler: any = null;

async function ensureInit() {
  if (!initialized) {
    initialized = init().then(() => {
      handler = serverless(app);
    });
  }
  await initialized;
}

export default async function (req: any, res: any) {
  await ensureInit();
  return handler(req, res);
}
