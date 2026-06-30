import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ThemeProvider, useTheme } from "../ThemeProvider";
import { Menu, X, Moon, Sun, ArrowUp, Phone, CalendarDays, Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-accent/20 transition-colors text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHome = location === "/";

  return (
    <ThemeProvider defaultTheme="light" storageKey="jmr-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans">
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || !isHome
              ? "bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm" 
              : "bg-transparent py-6"
          }`}
        >
          <div className="container px-4 mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 z-50">
              <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${!isScrolled && isHome ? 'text-white' : 'text-primary'}`}>
                JMR Infra <span className="text-accent">Developers</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <div className={`flex items-center gap-8 text-sm font-bold tracking-wide uppercase ${!isScrolled && isHome ? 'text-white/90' : 'text-muted-foreground'}`}>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
                <Link href="/completed" className="hover:text-accent transition-colors">Completed</Link>
                <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
                {isHome && <a href="#contact" className="hover:text-accent transition-colors">Contact</a>}
              </div>
              <div className="flex items-center gap-4">
                <div className={!isScrolled && isHome ? "text-white" : ""}>
                  <ThemeToggle />
                </div>
                <a href="tel:9291686881" className="h-10 inline-flex items-center justify-center rounded-sm bg-accent px-6 text-sm font-bold text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors">
                  Call Now
                </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden z-50">
              <div className={!isScrolled && isHome && !mobileMenuOpen ? "text-white" : "text-foreground"}>
                <ThemeToggle />
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${!isScrolled && isHome && !mobileMenuOpen ? "text-white" : "text-foreground"}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col md:hidden"
            >
              <nav className="flex flex-col gap-6 text-xl font-serif font-bold text-primary">
                <Link href="/" className="hover:text-accent border-b border-border pb-4">Home</Link>
                <Link href="/projects" className="hover:text-accent border-b border-border pb-4">Projects</Link>
                <Link href="/completed" className="hover:text-accent border-b border-border pb-4">Completed Projects</Link>
                <Link href="/gallery" className="hover:text-accent border-b border-border pb-4">Gallery</Link>
                <a href="tel:9291686881" className="inline-flex items-center gap-3 text-accent border-b border-border pb-4">
                  <Phone className="w-5 h-5" /> Call Us Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="border-t border-border bg-card text-card-foreground">
          <div className="container px-4 py-16 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <span className="font-serif text-2xl font-bold tracking-tight text-primary block">
                  JMR Infra <span className="text-accent">Developers</span>
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building Dreams, Creating Landmarks. Premium real estate builder and open plot developer based in Vijayawada, Andhra Pradesh.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors">
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors">
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors">
                    <SiX className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="hover:text-accent transition-colors">Ongoing Projects</Link></li>
                  <li><Link href="/completed" className="hover:text-accent transition-colors">Completed Projects</Link></li>
                  <li><Link href="/gallery" className="hover:text-accent transition-colors">Photo Gallery</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Services</h4>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li>Open Plot Sales</li>
                  <li>Apartment Construction</li>
                  <li>Luxury Villas</li>
                  <li>Commercial Buildings</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                <address className="not-italic text-sm text-muted-foreground space-y-3 font-medium">
                  <p>31/6/5, 31-6-16A, Anumolu Seshagirirao St</p>
                  <p>Divine Nagar, Machavaram</p>
                  <p>Vijayawada, Andhra Pradesh 520004</p>
                  <p className="pt-2 flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 9291686881</p>
                  <p className="flex items-center gap-2"><SiWhatsapp className="w-4 h-4 text-accent" /> jajulavarshini.ai@gmail.com</p>
                </address>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="text-sm font-medium text-muted-foreground">
                © 2026 JMR Infra Developers. All Rights Reserved.
              </div>
              <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 items-end">
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary shadow-lg border border-border hover:bg-background transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <a 
            href={isHome ? "#contact" : "/"} 
            className="flex h-12 px-6 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-lg hover:bg-accent/90 transition-colors whitespace-nowrap gap-2"
          >
            <CalendarDays className="w-4 h-4" /> <span className="hidden md:inline">Book Site Visit</span>
          </a>
          
          <div className="flex gap-3">
            <a 
              href="tel:9291686881" 
              className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/919291686881" 
              target="_blank" 
              rel="noreferrer" 
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
              aria-label="WhatsApp Us"
            >
              <SiWhatsapp className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
