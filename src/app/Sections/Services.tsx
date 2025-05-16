import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/before-and-after-2.jpg",
  "/images/before-and-after.jpg",
  "/images/driveway-2.png",
  "/images/driveway-3.JPG",
  "/images/driveway.png",
  "/images/land-clearing-2.jpg",
  "/images/land-clearing.png",
  "/images/long-driveway.png",
];

export default function Services() {
  const [currentIndexDesktop, setCurrentIndexDesktop] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      title: "Grading/Excavating",
      icon: null,
      image: images[0],
      description: "Expert grading and excavating for precise land shaping.",
    },
    {
      title: "Brush Mowing/Land Clearing",
      icon: null,
      image: images[1],
      description: "Clearing land and brush mowing with efficiency.",
    },
    {
      title: "Demolition",
      icon: null,
      image: images[2],
      description: "Safe demolition to clear structures and debris.",
    },
    {
      title: "Utilities",
      icon: null,
      image: images[3],
      description: "Utility line installation with precision.",
    },
    {
      title: "Drainage",
      icon: null,
      image: images[4],
      description: "Drainage solutions to manage water flow.",
    },
    {
      title: "Material Delivery/Removal",
      icon: null,
      image: images[5],
      description: "Reliable material delivery and removal.",
    },
    {
      title: "Landscaping",
      icon: null,
      image: images[6],
      description: "Expert landscaping design and installation.",
    },
  ];

  // Desktop Carousel Auto-Scroll
  const handleNextDesktop = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndexDesktop((prev) => {
      if (prev === images.length - 1) {
        return 0; // Smooth loop back to start
      }
      return (prev + 1) % images.length;
    });
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  }, [isTransitioning]);

  const handlePrevDesktop = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndexDesktop(
      (prev) => (prev - 1 + images.length) % images.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextDesktop();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNextDesktop]);

  // Mobile Carousel Auto-Scroll
  const handleNextMobile = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndexMobile((prev) => {
      if (prev === images.length - 1) {
        return 0; // Smooth loop back to start
      }
      return (prev + 1) % images.length;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const handlePrevMobile = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndexMobile((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextMobile();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNextMobile]);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-4 sm:py-6 bg-gradient-to-b from-gray-50 to-white bg-[url('/texture-bg.png')] bg-repeat bg-[length:150px_150px] bg-opacity-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-[#2f2f2f] tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#2f2f2f] to-[#f4a261] drop-shadow-md"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        {/* Desktop View: Two Columns (List + Image Carousel) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {/* Column 1: List of Services */}
          <motion.div
            className="bg-white/95 rounded-lg p-3 border border-gray-100 shadow-md col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 bg-gradient-to-b from-[#f4a261]/20 to-[#f4a261]/10 p-1 rounded">
              Services We Offer
            </h3>
            <div className="space-y-0.5 text-sm md:text-base text-gray-700">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-1 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-[#f4a261] rounded-full mr-1.5"></span>
                  <span className="truncate">{service.title}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-24 text-center">
              <p className="text-md text-gray-1000 mb-2">
                Don&apos;t see the service you need?
              </p>
              <Link href="#contact" passHref>
                <Button
                  variant="default"
                  className="cursor-pointer bg-[#f4a261] hover:bg-[#e76f51] text-white text-base px-8 py-4 rounded-lg min-w-[150px] min-h-[40px]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Column 2-3: Image Carousel */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-md col-span-2 h-[400px] sm:h-[450px] md:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden h-full relative bg-gradient-to-br from-[#fef8f2] to-[#f2e8d9] shadow-inner backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />{" "}
              {/* Softer vignette effect */}
              <AnimatePresence initial={false}>
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndexDesktop ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={image}
                        alt={`Project ${index + 1}`}
                        width={600}
                        height={500}
                        className="w-full h-full object-contain rounded-lg"
                        sizes="66vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/90 hover:bg-[#f4a261]/80 text-gray-800 rounded-full shadow-md"
              onClick={handlePrevDesktop}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/90 hover:bg-[#f4a261]/80 text-gray-800 rounded-full shadow-md"
              onClick={handleNextDesktop}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Mobile View: Text List + Image Carousel */}
        <div className="md:hidden">
          {/* Text List of Services in Two Columns */}
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-1 text-md text-gray-700">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="py-0.5 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-[#f4a261] rounded-full mr-1"></span>
                  {service.title}
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Don&apos;t see the service you need?
              </p>
              <Link href="#contact" passHref>
                <Button
                  variant="default"
                  className="cursor-pointer bg-[#f4a261] hover:bg-[#e76f51] text-white text-base px-8 py-4 rounded-lg min-w-[150px] min-h-[40px]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-md h-48 sm:h-56 md:h-64">
            <div className="overflow-hidden h-full relative bg-gradient-to-br from-[#fef8f2] to-[#f2e8d9] shadow-inner backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />{" "}
              {/* Softer vignette effect */}
              <AnimatePresence initial={false}>
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndexMobile ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={image}
                        alt={`Project ${index + 1}`}
                        width={250}
                        height={200}
                        className="w-full h-full object-contain rounded-lg"
                        sizes="100vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/90 hover:bg-[#f4a261]/80 text-gray-800 rounded-full shadow-md"
              onClick={handlePrevMobile}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/90 hover:bg-[#f4a261]/80 text-gray-800 rounded-full shadow-md"
              onClick={handleNextMobile}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
