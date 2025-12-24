import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="bg-muted py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">About Us</h1>
        <p className="text-muted-foreground mt-4 uppercase tracking-widest text-sm">Our Philosophy & Approach</p>
      </div>

      <div className="container px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed text-muted-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-[-10px]">
              We specialize in transforming outdoor environments into inspired spaces that seamlessly blend functionality, aesthetics, and sustainability. With proven expertise in Landscape, Hardscape, and Softscape execution, we bring visionary designs to life down to the last detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Our process is deeply rooted in understanding each client’s needs, the unique conditions of every site, and the long-term usability of our work. From lush gardens and vibrant green spaces to durable walkways and custom outdoor features, we focus on delivering excellence at every stage—driven by quality, innovation, and a passion for design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-secondary pl-8 py-2 bg-stone-50"
          >
            <p className="text-xl font-serif text-foreground font-medium italic">
              "We create outdoor spaces that don’t just look beautiful—they enrich lives, encourage connection, and stand the test of time."
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
