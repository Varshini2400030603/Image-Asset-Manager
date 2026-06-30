import { Layout } from "../components/layout/Layout";
import { images } from "../data";

export default function Gallery() {
  const galleryImages = [
    { src: images.heroImg, alt: "Luxury Apartment" },
    { src: images.plot1 || images.plotImg, alt: "Open Plot" },
    { src: images.aptImg, alt: "Apartment Interior" },
    { src: images.villaImg, alt: "Villa Exterior" },
    { src: images.commImg, alt: "Commercial Building" },
    { src: images.heroImg, alt: "Night View" },
  ];

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white/80 max-w-2xl">A visual journey through our premium projects and construction quality.</p>
        </div>
      </div>
      
      <section className="py-16 bg-background min-h-screen">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow border border-border group cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
