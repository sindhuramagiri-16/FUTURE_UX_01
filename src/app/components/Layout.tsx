import { Outlet, Link } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F7F2ED]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-[#3E2C23]">
              HOME & HUE
            </Link>
            <div className="flex items-center gap-10">
              <Link to="/" className="text-[#3E2C23] hover:text-[#A47551] transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="text-[#3E2C23] hover:text-[#A47551] transition-colors font-medium">
                Services
              </Link>
              <Link to="/" className="text-[#3E2C23] hover:text-[#A47551] transition-colors font-medium">
                Portfolio
              </Link>
              <Link to="/contact" className="text-[#3E2C23] hover:text-[#A47551] transition-colors font-medium">
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-[#A47551] text-white px-7 py-3 rounded-xl hover:bg-[#8B5E3C] transition-all shadow-md hover:shadow-lg font-medium"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}
