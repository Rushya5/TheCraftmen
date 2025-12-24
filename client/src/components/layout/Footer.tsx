import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <h2 className="text-2xl font-serif font-bold tracking-tight">THE CRAFTSMEN</h2>
            </div>
            <p className="text-primary-foreground/80 max-w-sm mb-6 leading-relaxed">
              Transforming outdoor environments into inspired spaces that seamlessly blend functionality, aesthetics, and sustainability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-secondary">Contact</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Srihari Sattu</li>
              <li>+91 78930 59814</li>
              <li>hyd.landscape@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} The Craftsmen Landscape. All rights reserved.</p>
          <p>Designed with precision & nature in mind.</p>
        </div>
      </div>
    </footer>
  );
}
