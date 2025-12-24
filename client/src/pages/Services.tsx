import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Landscape PMC",
      image: "/services/landscape-pmc.jpg",
      description: "Comprehensive project management consultancy to ensure your vision is executed flawlessly.",
      items: [
        "Project Planning & Design Coordination",
        "Procurement Assistance",
        "Construction Supervision & Monitoring",
        "Communication & Reporting",
        "Quality Control"
      ]
    },
    {
      title: "Hardscape",
      image: "/services/hardscape.jpg",
      description: "Structural elements that define the architecture of your outdoor space.",
      items: [
        "All Civil Works",
        "Fabrication",
        "Wooden Works",
        "Lighting",
        "Plumbing",
        "Irrigation"
      ]
    },
    {
      title: "Softscape",
      image: "/services/softscape.jpg",
      description: "Living elements that bring texture, color, and life to the environment.",
      items: [
        "Plantation",
        "Lawn Installation",
        "Vertical Gardens",
        "Indoor Plantation",
        "Maintenance"
      ]
    }
  ];

  return (
    <Layout>
       <div className="bg-primary py-20 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Services</h1>
        <p className="text-primary-foreground/80 mt-4 uppercase tracking-widest text-sm">Comprehensive Landscape Solutions</p>
      </div>

      <div className="container px-4 md:px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-muted aspect-video mb-8 overflow-hidden relative rounded-lg">
                 <img 
                   src={service.image}
                   alt={service.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   onError={(e) => {
                     // Fallback to placeholder if image fails to load
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="absolute inset-0 bg-stone-200 flex items-center justify-center"><span class="text-muted-foreground/40 text-sm">Image not found</span></div>';
                   }}
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors rounded-lg" />
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-primary">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>

              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
