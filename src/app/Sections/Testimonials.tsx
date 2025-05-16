import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "“Zack with Elite Dirt Works LLC does a great job, professional and personable. Would definitely recommend them for your next project.”",
      author: "– Luke Rogers",
    },
    {
      quote:
        "“Zack came out to our home and put in a gravel driveway for us, after taking out all the grass. cleaned up well. He did a great job! Would highly recommend”",
      author: "– Tina Wassermann",
    },
    {
      quote:
        "“Their dirt work made our new driveway perfect. Highly recommend Zack’s team!”",
      author: "– Emily K",
    },
  ];

  return (
    <motion.section
      id="testimonials"
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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/95 rounded-lg shadow-md p-3 sm:p-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContent className="pt-2">
                <p className="italic text-xs sm:text-sm md:text-base text-gray-700 mb-2">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-xs sm:text-sm md:text-base text-[#2f2f2f] bg-gradient-to-b from-[#f4a261]/20 to-[#f4a261]/10 p-1 rounded">
                  {testimonial.author}
                </p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
