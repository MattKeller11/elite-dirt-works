import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white bg-[url('/texture-bg.png')] bg-repeat bg-[length:150px_150px] bg-opacity-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-[#2f2f2f] tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#2f2f2f] to-[#f4a261] drop-shadow-md"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Elite Dirt Works
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          <motion.div
            className="w-full md:w-1/2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/contact.jpg"
              alt="Elite Dirt Works Team"
              width={400}
              height={400}
              className="w-full max-w-[250px] mx-auto rounded-lg shadow-md md:max-w-[350px]"
              sizes="(max-width: 768px) 250px, 350px"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2">
              Elite Dirt Works is driven by an unwavering passion for delivering
              exceptional quality in every project. With a commitment to
              craftsmanship, we transform landscapes with meticulous attention
              to detail.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3">
              Honesty and hard work are at our core, as we collaborate closely
              with you to turn your dreams into reality. Equipped with advanced
              tools, we sculpt the earth with precision and care.
            </p>
            <div className="border-l-4 border-[#f4a261] pl-3">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 bg-gradient-to-b from-[#f4a261]/20 to-[#f4a261]/10 p-1 rounded">
                Our Milestones
              </h3>
              <ul className="text-xs sm:text-sm md:text-base text-gray-700 list-disc list-inside">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  2019: Established with a vision to redefine land
                  transformation.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  2022: Introduced cutting-edge equipment to enhance service
                  precision.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  2025: Recognized as a leader in innovative earthwork
                  solutions.
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
