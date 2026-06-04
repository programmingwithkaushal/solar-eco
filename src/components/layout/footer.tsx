import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Solar<span className="text-primary">Eco</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading the transition to sustainable energy in India. We provide affordable, high-quality solar installations for homes and businesses.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Projects Portfolio", "Contact Us", "Admin Login"].map((link) => (
                <li key={link}>
                  <Link href={link === "Admin Login" ? "/admin" : `/${link.toLowerCase().replace(" ", "-").replace("home", "")}`} className="flex items-center group hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-primary transition-colors">Residential Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Commercial Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Industrial Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Solar Maintenance</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Net Metering Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Green Energy Park, Tech Hub Area, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@solareco.in" className="hover:text-white transition-colors">info@solareco.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:flex md:justify-between items-center">
          <p>© {new Date().getFullYear()} SolarEco Energy Solutions. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
