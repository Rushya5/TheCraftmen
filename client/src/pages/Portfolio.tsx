import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  image?: string | string[]; // Single image path or array of image paths
};

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{ 
    images: string[]; 
    currentIndex: number; 
    title: string; 
    category: string 
  } | null>(null);

  // Keyboard navigation for image gallery
  useEffect(() => {
    if (!selectedImage || selectedImage.images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedImage({
          ...selectedImage,
          currentIndex: selectedImage.currentIndex > 0 
            ? selectedImage.currentIndex - 1 
            : selectedImage.images.length - 1
        });
      } else if (e.key === "ArrowRight") {
        setSelectedImage({
          ...selectedImage,
          currentIndex: selectedImage.currentIndex < selectedImage.images.length - 1 
            ? selectedImage.currentIndex + 1 
            : 0
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const softscapeProjects: Project[] = [
    { title: "Ms. Deepa Reddy", category: "Residential", image: "/portfolio/softscape/deepa-reddy.jpg" },
    { title: "Mr. Tharun", category: "Residential", image: "/portfolio/softscape/tharun.jpg" },
    { title: "Ms. Meghana Agarwal", category: "Residential", image: "/portfolio/softscape/meghana-agarwal.jpg" },
    { title: "Ms. Anju", category: "Residential", image: "/portfolio/softscape/anju.jpg" },
    { title: "Ms. Rudrika", category: "Residential", image: "/portfolio/softscape/rudrika.jpg" },
    { title: "Kavitha Shrinath", category: "Residential", image: "/portfolio/softscape/kavitha-shrinath.jpg" },
    { title: "Mr. Chakri", category: "Residential", image: "/portfolio/softscape/chakri.jpg" },
    { title: "Sky Salt Cafe", category: "Hospitality", image: "/portfolio/softscape/sky-salt-cafe.jpg" },
    { title: "Mr. Sashikanth", category: "Residential", image: "/portfolio/softscape/sashikanth.jpg" },
    { title: "Mounika Sathe", category: "Residential", image: "/portfolio/softscape/mounika-sathe.jpg" },
    { title: "Ms. Pallavi Arka", category: "Residential", image: "/portfolio/softscape/pallavi-arka.jpg" },
    { title: "Peacock Life Store", category: "Commercial", image: "/portfolio/softscape/peacock-life-store.jpg" },
    { title: "Lock and Décor Store", category: "Commercial", image: "/portfolio/softscape/lock-decor-store.jpg" },
  ];

  const hardscapeProjects: Project[] = [
    { title: "Aranya Resorts", category: "Hospitality", image: "/portfolio/hardscape/aranya-resorts.jpg" },
    { title: "Aranya Resorts – Feature Installation", category: "Hospitality", image: "/portfolio/hardscape/aranya-feature.jpg" },
    { 
      title: "Aranya Resorts (Multiple Works)", 
      category: "Hospitality", 
      image: [
        "/portfolio/hardscape/aranya-multiple.jpg",
        "/portfolio/hardscape/aranya-multiple-2.jpg"
      ]
    },
    { title: "Mr. Pratap", category: "Residential – Ongoing", image: [
      "/portfolio/hardscape/Pratap.jpg",
      "/portfolio/hardscape/Pratap-2.jpg"
    ] },
    { title: "Stone Craft", category: "Fabrication & Civil", image: "/portfolio/hardscape/stone-craft.jpg" },
  ];

  return (
    <Layout>
      <div className="bg-stone-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Portfolio</h1>
        <p className="text-white/60 mt-4 uppercase tracking-widest text-sm">Selected Works</p>
      </div>

      <div className="container px-4 md:px-6 py-16">
        <Tabs defaultValue="softscape" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1">
              <TabsTrigger value="softscape" className="px-8 py-3 font-serif data-[state=active]:bg-white">Softscape Execution</TabsTrigger>
              <TabsTrigger value="hardscape" className="px-8 py-3 font-serif data-[state=active]:bg-white">Hardscape Execution</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="softscape">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softscapeProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index} 
                  onImageClick={(images) => setSelectedImage({ images, currentIndex: 0, title: project.title, category: project.category })} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hardscape">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardscapeProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index} 
                  onImageClick={(images) => setSelectedImage({ images, currentIndex: 0, title: project.title, category: project.category })} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Image Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.images[selectedImage.currentIndex]}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Navigation Arrows - Only show if multiple images */}
              {selectedImage.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({
                        ...selectedImage,
                        currentIndex: selectedImage.currentIndex > 0 
                          ? selectedImage.currentIndex - 1 
                          : selectedImage.images.length - 1
                      });
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({
                        ...selectedImage,
                        currentIndex: selectedImage.currentIndex < selectedImage.images.length - 1 
                          ? selectedImage.currentIndex + 1 
                          : 0
                      });
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                    {selectedImage.currentIndex + 1} / {selectedImage.images.length}
                  </div>
                </>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-serif font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm uppercase tracking-wider">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

function ProjectCard({ 
  project, 
  index, 
  onImageClick 
}: { 
  project: Project; 
  index: number; 
  onImageClick: (images: string[]) => void;
}) {
  // Convert single image to array, or use array if provided
  const images = project.image 
    ? Array.isArray(project.image) 
      ? project.image 
      : [project.image]
    : [`https://images.unsplash.com/photo-${index % 2 === 0 ? '1585320806236-4678f530a6c0' : '1628156108139-441d3b06385a'}?auto=format&fit=crop&q=80&w=800`];
  
  const imageSrc = images[0]; // Show first image in card
  
  const handleClick = () => {
    onImageClick(images);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div 
        className="relative aspect-[4/3] bg-muted overflow-hidden mb-4 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <img 
          src={imageSrc}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1585320806236-4678f530a6c0?auto=format&fit=crop&q=80&w=800`;
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors rounded-lg" />
        
        {/* Show gallery indicator if multiple images */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {images.length} photos
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary">
            {images.length > 1 ? `View ${images.length} photos` : "Click to enlarge"}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-serif font-bold text-primary group-hover:text-primary/80 transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</p>
      </div>
    </motion.div>
  );
}
