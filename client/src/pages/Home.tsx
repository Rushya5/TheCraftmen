import { Layout } from "@/components/layout/Layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Leaf, Hammer, Flower2, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/generated_images/modern_luxury_landscape_architecture_garden.png";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section with Parallax */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              y: y,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <motion.div className="container relative z-10 px-4 text-center text-white" style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight">
                Crafting Inspired <br/>
                <span className="text-secondary italic">Outdoor Landscapes</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                Landscape • Hardscape • Softscape
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio" className={cn(buttonVariants({ size: "lg" }), "bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6 rounded-none uppercase tracking-widest font-semibold")}>
                    View Our Work
                </Link>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white text-white hover:bg-white hover:text-primary text-base px-8 py-6 rounded-none uppercase tracking-widest font-semibold backdrop-blur-sm")}>
                    Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
          </motion.div>
        </section>

        {/* Intro Snapshot with Parallax */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About The Craftsmen</h4>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 leading-tight">
                  Transforming environments into <span className="italic text-primary">living masterpieces</span>.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  We specialize in creating outdoor spaces that don't just look beautiful—they enrich lives. From lush gardens and vibrant green spaces to durable walkways and custom outdoor features, we focus on delivering excellence at every stage.
                </p>
                <Link href="/about" className={cn(buttonVariants({ variant: "link" }), "text-primary p-0 h-auto font-semibold uppercase tracking-wider group")}>
                    Read More About Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80" 
                    alt="Landscape details" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    whileInView={{ y: [20, -20] }}
                    transition={{ duration: 2 }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square bg-secondary p-8 flex items-center justify-center text-center">
                  <p className="font-serif text-2xl font-bold text-secondary-foreground">
                    Premium Quality Execution
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview with Stagger Parallax */}
        <section className="py-24 bg-stone-100 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Expertise
              </motion.h2>
              <div className="w-20 h-1 bg-primary mx-auto opacity-30" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Leaf, 
                  title: "Landscape PMC", 
                  desc: "Project planning, design coordination, and comprehensive supervision." 
                },
                { 
                  icon: Hammer, 
                  title: "Hardscape", 
                  desc: "Civil works, fabrication, lighting, plumbing, and durable structures." 
                },
                { 
                  icon: Flower2, 
                  title: "Softscape", 
                  desc: "Plantation, vertical gardens, lawn installation, and ongoing maintenance." 
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-background p-10 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80">
                      Explore Service
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us with Parallax */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Why Choose The Craftsmen?</h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  We bring visionary designs to life with a commitment to quality that stands the test of time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Uncompromised Quality",
                    "Sustainable Practices",
                    "Attention to Detail",
                    "End-to-End Execution"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative h-full min-h-[300px] border border-white/20 p-4 overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-4 bg-black/20" />
                <motion.img 
                  src="/portfolio/softscape/kavitha-shrinath.jpg" 
                  alt="Detailed work" 
                  className="w-full h-full object-cover grayscale mix-blend-overlay opacity-80"
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
