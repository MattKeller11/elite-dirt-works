import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1a1a1a] text-white py-8 sm:py-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-xl">
              Elite Dirt Works
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Transforming landscapes in Zimmerman, MN since 2013.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-xl">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#f4a261] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#f4a261] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#f4a261] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-xl">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100082958757568"
                className="hover:text-[#f4a261] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm sm:text-base text-gray-400">
          <p>© 2025 Elite Dirt Works. All rights reserved.</p>
          <p className="mt-2">Crafted with pride in Zimmerman, MN</p>
        </div>
      </div>
    </motion.footer>
  );
}
