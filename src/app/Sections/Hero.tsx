import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const sendQuoteEvent = () => {
    gtag("event", "get_quote_click", {
      event_category: "quote",
      event_label: "get_quote",
    });
  };

  const sendServicesEvent = () => {
    gtag("event", "view_services_click", {
      event_category: "services",
      event_label: "view_services",
    });
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[500px] max-h-[700px] flex items-center justify-center text-center"
    >
      <Image
        src="/images/hero2.jpg"
        alt="Hero Background"
        fill
        className="object-cover brightness-125 hero-image"
        priority
        sizes="(max-width: 640px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#2f2f2f]/50"></div>
      <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold mb-4 lg:text-6xl tracking-tight drop-shadow-lg">
          Elite Dirt Works
        </h1>
        <p className="text-xl mb-6 md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Enhancing Spaces with Expert Site Clearing and Land Prep in Minnesota
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" passHref>
            <Button
              size="lg"
              onClick={() => sendQuoteEvent()}
              className="cursor-pointer bg-[#f4a261] hover:bg-[#e76f51] text-white text-base px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg min-w-[200px] min-h-[44px] sm:min-h-[56px]"
            >
              Get a Free Quote
            </Button>
          </Link>
          <Link href="#services" passHref>
            <Button
              size="lg"
              onClick={() => sendServicesEvent()}
              variant="outline"
              className="cursor-pointer bg-white text-[#f4a261] border-[#f4a261] hover:bg-[#f4a261]/30 hover:text-[#e76f51] hover:border-[#e76f51] text-base px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg min-w-[200px] min-h-[44px] sm:min-h-[56px]"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
