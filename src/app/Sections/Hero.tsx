import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[80vh] max-h-[700px] flex items-center justify-center text-center bg-cover bg-center"
    >
      <Image
        src="/images/hero.jpeg"
        alt="Hero Background"
        fill
        className="object-cover object-[center_80%]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#2f2f2f]/50"></div>
      <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-4 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-lg">
          Elite Dirt Works
        </h1>
        <p className="text-base mb-6 sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Transforming Landscapes with Precision in Zimmerman, MN
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" passHref>
            <Button
              size="lg"
              className="cursor-pointer bg-[#f4a261] hover:bg-[#e76f51] text-white text-base px-8 py-4 rounded-lg min-w-[200px] min-h-[56px]"
            >
              Get a Free Quote
            </Button>
          </Link>
          <Link href="#services" passHref>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer bg-white text-[#f4a261] border-[#f4a261] hover:bg-[#f4a261]/30 hover:text-[#e76f51] hover:border-[#e76f51] text-base px-8 py-4 rounded-lg transition-colors min-w-[200px] min-h-[56px]"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
