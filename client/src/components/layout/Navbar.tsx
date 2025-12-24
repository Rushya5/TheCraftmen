import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-4 border-border shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="The Craftsmen Landscape" 
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary relative group",
                  location === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-foreground"
                    : "text-white"
                )}
              >
                <span className={cn(
                   location === "/" && !scrolled ? "text-white drop-shadow-md" : "text-foreground"
                )}>
                  {link.label}
                </span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
            </Link>
          ))}
          <Link href="/contact" className={cn(
              "px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all border block",
              location === "/" && !scrolled 
                ? "bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" 
                : "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            )}>
              Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
                className={cn(
                  "text-lg font-serif font-medium p-2 block hover:bg-muted/50 rounded-md transition-colors",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
