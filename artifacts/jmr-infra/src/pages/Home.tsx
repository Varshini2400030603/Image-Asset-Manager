import { Layout } from "../components/layout/Layout";
import { projects, testimonials, images } from "../data";
import { Link } from "wouter";
import { EnquiryForm } from "../components/EnquiryForm";
import { 
  Building2, 
  Map, 
  Home as HomeIcon, 
  Store, 
  Briefcase,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={images.heroImg} 
            alt="Luxury apartment building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <div className="relative z-10 container px-4 mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Building Dreams, <br/><span className="text-accent">Creating Landmarks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            JMR Infra Developers. Premium Open Plots, Luxury Apartments, and Quality Construction in Vijayawada.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-8 text-sm font-bold text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors">
              Explore Projects
            </Link>
            <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 text-sm font-bold text-white shadow hover:bg-white hover:text-primary transition-colors">
              Book a Site Visit
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-card text-card-foreground">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">About JMR Infra</h2>
            <p className="text-lg text-muted-foreground">
              With years of excellence in the real estate sector, JMR Infra Developers has built a reputation for trust, unparalleled quality, and timely delivery. We don't just build properties; we craft premium lifestyles that turn your real estate aspirations into reality.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-border pt-12">
            <div className="p-4">
              <div className="text-5xl font-serif font-bold text-accent mb-2">50+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-serif font-bold text-accent mb-2">1000+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Happy Families</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-serif font-bold text-accent mb-2">500+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Open Plots Sold</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-serif font-bold text-accent mb-2">20+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Apartments Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive real estate solutions tailored to your premium lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow border border-border hover:border-accent transition-colors">
              <Map className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Open Plot Sales</h3>
              <p className="text-muted-foreground">Premium, legally clear plots in high-growth corridors, perfect for investment or building your custom villa.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow border border-border hover:border-accent transition-colors">
              <Building2 className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Apartment Construction</h3>
              <p className="text-muted-foreground">Luxury high-rise and mid-rise apartments featuring modern amenities and elegant architectural design.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow border border-border hover:border-accent transition-colors">
              <HomeIcon className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Residential Projects</h3>
              <p className="text-muted-foreground">Master-planned gated communities offering a secure, serene environment for your family.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow border border-border hover:border-accent transition-colors md:col-start-2">
              <Store className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Commercial Buildings</h3>
              <p className="text-muted-foreground">State-of-the-art commercial spaces and retail complexes located in prime business districts.</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow border border-border hover:border-accent transition-colors">
              <Briefcase className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Property Consultation</h3>
              <p className="text-muted-foreground">Expert guidance to help you make informed, secure, and highly profitable real estate decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl">Explore our handpicked selection of premium properties that redefine luxury living.</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex mt-6 md:mt-0 h-10 items-center justify-center border-b-2 border-accent px-4 text-sm font-bold text-primary hover:text-accent transition-colors">
              View All Projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group bg-background rounded-xl overflow-hidden shadow-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1 mb-4">
                    <MapPin className="w-4 h-4" /> {project.location}
                  </p>
                  <div className="flex justify-between items-end pt-4 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Starting from</div>
                      <div className="font-serif text-xl font-bold text-accent">{project.startingPrice}</div>
                    </div>
                    <Link href={`/projects/${project.id}`} className="inline-flex h-9 items-center justify-center rounded bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-md border border-primary px-8 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white w-full">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-primary-foreground/80">The trust of our clients is our greatest asset.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card text-card-foreground p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-bold text-primary">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQ */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold">How do I book a plot?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can start by booking a site visit through our website or calling us. Once you select a plot, a token advance is required to block it, followed by the registration process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold">Is bank loan available?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our projects are approved by major nationalized and private banks. We have a dedicated team to assist you with the home loan process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold">Are approvals completed?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. All our projects have clear titles and are approved by the relevant local authorities (CRDA, AP RERA, etc.). We ensure 100% legal compliance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-bold">What documents are provided?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Upon registration, you will receive the sale deed, link documents, layout approval copy, encumbrance certificate (EC), and possession certificate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-bold">What are the payment options?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer flexible payment plans linked to construction milestones for apartments, and easy installment options for open plots. Contact our sales team for specific project plans.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 bg-secondary p-8 rounded-xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-primary">Office Address</div>
                      <p className="text-muted-foreground text-sm mt-1">31/6/5, 31-6-16A, Anumolu Seshagirirao St, Divine Nagar, Machavaram, Vijayawada, Andhra Pradesh 520004</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-primary">Phone</div>
                      <a href="tel:9291686881" className="text-muted-foreground text-sm mt-1 hover:text-accent block">9291686881</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-primary">Email</div>
                      <a href="mailto:jajulavarshini.ai@gmail.com" className="text-muted-foreground text-sm mt-1 hover:text-accent block">jajulavarshini.ai@gmail.com</a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 rounded-lg overflow-hidden h-48 border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15300.916120894088!2d80.6406!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efcd0a0584b1%3A0x6b637d975db355d9!2sMachavaram%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JMR Infra Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
