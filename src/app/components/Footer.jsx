"use client";
import { Logo } from "./Logo";

export function Footer() {
 
  const scrollToSection = (sectionId) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-12 mt-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
            {/* Logo and text */}
            <div className="md:col-span-5">
              <Logo height={"h-20"} />
              <p className="text-sm mt-4 text-gray-600 font-serif max-w-xs">
                Nourishing homes, one delivery at a time. Thank you for
                supporting local and sustainable living.
              </p>
            </div>

            {/* Site Map links */}
            <div className="md:col-span-3 border-r flex justify-center  border-gray-600">
              <div className="">
                <h3 className="text-md font-semibold text-gray-800">Site Map</h3>
                <ul className="mt-4 space-y-3 text-gray-700 text-sm font-medium">
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-5" onClick={() => scrollToSection("nav")}>Home</li>
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-30" onClick={() => scrollToSection("products")}>Our Products</li>
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-17" onClick={() => scrollToSection("about")}>About Us</li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex justify-center ">
              <div>
                <h3 className="text-md font-semibold text-gray-800">Quick Links</h3>
                <ul className="mt-4 space-y-3 text-gray-700 text-sm font-medium">
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-25">Privacy Policy</li>
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-30">Terms of Service</li>
                    <li className="hover:text-gray-900 transition-colors cursor-pointer w-5">Contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright line */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} FarmFerry . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}