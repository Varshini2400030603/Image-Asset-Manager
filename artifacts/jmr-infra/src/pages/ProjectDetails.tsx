import { Layout } from "../components/layout/Layout";
import { projects, images } from "../data";
import { useParams, Link } from "wouter";
import { MapPin, ArrowLeft, CheckCircle2, Share2, Download, Building, Ruler, Calendar, CheckSquare } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Setup carousel listeners if needed
    }
  }, [emblaApi]);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has been removed.</p>
          <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-bold text-primary-foreground">
            Return to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  const amenities = [
    "24/7 Security", "Gated Community", "Vastu Compliant", "Underground Drainage",
    "Avenue Plantation", "Children's Play Area", "Black Top Roads", "Water Supply",
    "Street Lighting", "Park / Green Space"
  ];

  const galleryImgs = [project.image, images.heroImg, images.villaImg];

  return (
    <Layout>
      {/* Header Banner */}
      <div className="bg-primary text-white pt-32 pb-12">
        <div className="container px-4 mx-auto">
          <Link href="/projects" className="inline-flex items-center text-white/70 hover:text-accent text-sm mb-8 transition-colors font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide">
                  {project.status}
                </span>
                <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-sm border border-white/20 uppercase tracking-wide">
                  {project.type}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
              <p className="text-white/80 flex items-center text-lg font-medium">
                <MapPin className="w-5 h-5 mr-2 text-accent" /> {project.location}
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: project.name, url: window.location.href });
                  }
                }}
                className="flex items-center justify-center h-12 w-12 rounded-sm bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors border border-white/20"
                aria-label="Share Project"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button 
                onClick={() => alert("Brochure download initiated.")}
                className="flex items-center h-12 px-6 rounded-sm bg-white/10 hover:bg-accent hover:text-accent-foreground text-sm font-bold transition-colors border border-white/20 uppercase tracking-wider"
              >
                <Download className="w-4 h-4 mr-2" /> Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Embla Carousel Gallery */}
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-border group">
                <div className="embla overflow-hidden" ref={emblaRef}>
                  <div className="embla__container flex">
                    {galleryImgs.map((img, idx) => (
                      <div className="embla__slide flex-[0_0_100%] min-w-0" key={idx}>
                        <div className="aspect-[16/9] w-full">
                          <img src={img} alt={`${project.name} - View ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-primary shadow hover:bg-accent hover:text-accent-foreground opacity-0 group-hover:opacity-100 transition-all" onClick={scrollPrev}>
                  &larr;
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-primary shadow hover:bg-accent hover:text-accent-foreground opacity-0 group-hover:opacity-100 transition-all" onClick={scrollNext}>
                  &rarr;
                </button>
              </div>
              
              {/* Overview */}
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm border border-border">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                  {project.description} Experience the perfect blend of modern living and natural serenity at {project.name}. 
                  Strategically located in {project.location}, this {project.type.toLowerCase()} project offers unparalleled 
                  connectivity to major hubs while providing a peaceful sanctuary for your family.
                </p>
                
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Amenities & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {amenities.map((item, i) => (
                    <div key={i} className="flex items-center text-muted-foreground bg-secondary/50 p-4 rounded-lg border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Plan / Map (Placeholder) */}
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm border border-border">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Location Map</h2>
                <div className="aspect-video bg-secondary rounded-lg border border-border overflow-hidden flex items-center justify-center relative">
                   <iframe 
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15300.916120894088!2d80.6406!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efcd0a0584b1%3A0x6b637d975db355d9!2s${encodeURIComponent(project.location)}!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${project.name} Location`}
                    className="absolute inset-0 grayscale opacity-80 mix-blend-multiply"
                  ></iframe>
                </div>
              </div>

            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info Card */}
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border border-t-4 border-t-accent sticky top-32">
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-wider">Starting Price</div>
                  <div className="font-serif text-4xl font-bold text-primary">{project.startingPrice}</div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary">
                      <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Sizes</div>
                      <div className="font-bold text-primary">{project.plotSizes}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Property Type</div>
                      <div className="font-bold text-primary">{project.type}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary">
                      <CheckSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</div>
                      <div className="font-bold text-primary">{project.status}</div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {
                    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full h-14 bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 rounded-sm shadow-md"
                >
                  Enquire Now
                </Button>
              </div>
              
              <div id="enquiry-form" className="scroll-mt-32">
                <EnquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
