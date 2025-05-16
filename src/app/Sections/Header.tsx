import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-[#2f2f2f] text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="w-full px-2 py-2 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.jpg"
            alt="Elite Dirt Works Logo"
            width={50}
            height={50}
            className="rounded-full"
            sizes="(max-width: 768px) 50px, 60px"
          />
          <span className="text-lg font-extrabold sm:text-xl lg:text-2xl tracking-tight">
            Elite Dirt Works
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-10 text-base lg:text-lg font-medium justify-end">
            <Link
              href="#home"
              className="hover:text-[#f4a261] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="hover:text-[#f4a261] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-[#f4a261] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#f4a261] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <a href="tel:763-464-9654" className="hidden md:block">
            <Phone className="h-6 w-6 hover:text-[#f4a261] transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082958757568"
            className="hidden md:block"
          >
            <Facebook className="h-6 w-6 hover:text-[#f4a261] transition-colors" />
          </a>
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#f4a261] p-2 rounded-full cursor-pointer h-10 w-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="!h-6 !w-6" />
            ) : (
              <Menu className="!h-6 !w-6" />
            )}
          </Button>
          <a
            href="tel:763-464-9654"
            className="cursor-pointer h-10 w-10 flex items-center justify-center"
          >
            <Phone className="h-6 w-6 hover:text-[#f4a261] transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082958757568"
            className="cursor-pointer h-10 w-10 flex items-center justify-center"
          >
            <Facebook className="h-6 w-6 hover:text-[#f4a261] transition-colors" />
          </a>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#2f2f2f] text-white px-4 py-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 text-base font-medium">
              <Link
                href="#home"
                className="py-2 hover:text-[#f4a261] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="py-2 hover:text-[#f4a261] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="py-2 hover:text-[#f4a261] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="py-2 hover:text-[#f4a261] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
