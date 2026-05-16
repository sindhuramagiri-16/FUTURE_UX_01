import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E2C23] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl mb-4 font-bold">HOME & HUE</h3>
            <p className="text-white opacity-70 leading-relaxed">
              Creating beautiful, functional spaces that reflect your unique style and personality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-4 font-semibold">Services</h4>
            <ul className="space-y-3">
              <li className="text-white opacity-70">Residential Interior</li>
              <li className="text-white opacity-70">Office Design</li>
              <li className="text-white opacity-70">Renovation</li>
              <li className="text-white opacity-70">Custom Furniture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4 font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white opacity-70">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>hello@homeandhue.com</span>
              </li>
              <li className="flex items-start gap-3 text-white opacity-70">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-white opacity-70">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Road No 36, Jubilee Hills, Hyderabad, Telangana 500033</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white opacity-60">
            © 2026 HOME & HUE. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
