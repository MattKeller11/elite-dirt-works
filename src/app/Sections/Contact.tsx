import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    console.log("Form element:", e.currentTarget); // Debug log
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      setFormStatus("success");
      if (e.currentTarget) {
        e.currentTarget.reset(); // Clear all form fields on success
      } else if (formRef.current) {
        formRef.current.reset(); // Fallback using ref
      }
      setTimeout(() => setFormStatus("idle"), 3000);
    } else {
      setFormStatus("error");
      setErrorMessage(
        result.message || "Failed to send message. Please try again."
      );
      setTimeout(() => setFormStatus("idle"), 3000);
    }

    gtag("event", "send_message_click", {
      event_category: "message",
      event_label: "send_message",
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 bg-[#2f2f2f] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-center mb-8 sm:text-3xl md:text-4xl tracking-tight">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 sm:text-2xl md:text-3xl">
              Contact Information
            </h3>
            <p className="flex items-center mb-3 text-sm sm:text-base md:text-lg">
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> 763-464-9654
            </p>
            <p className="flex items-center mb-3 text-sm sm:text-base md:text-lg">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />{" "}
              Dirtworks.elite@gmail.com
            </p>
            <p className="flex items-center mb-3 text-sm sm:text-base md:text-lg">
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Zimmerman, MN
              55398
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100082958757568"
                className="hover:text-[#f4a261] transition-colors"
              >
                <Facebook className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission from Dirtworks Elite"
              />
              <input
                type="hidden"
                name="from_name"
                value="Dirtworks Elite Website"
              />
              <Input
                placeholder="Your Name"
                name="name"
                className="bg-white text-black text-sm sm:text-base py-2 md:py-3 md:text-lg rounded-md"
                disabled={formStatus === "submitting"}
                required
              />
              <Input
                placeholder="Your Email"
                type="email"
                name="email"
                className="bg-white text-black text-sm sm:text-base py-2 md:py-3 md:text-lg rounded-md"
                disabled={formStatus === "submitting"}
                required
              />
              <Input
                placeholder="Your Phone"
                type="tel"
                name="phone"
                className="bg-white text-black text-sm sm:text-base py-2 md:py-3 md:text-lg rounded-md"
                disabled={formStatus === "submitting"}
              />
              <Textarea
                placeholder="Your Message"
                name="message"
                className="bg-white text-black text-sm sm:text-base py-2 md:py-3 md:text-lg rounded-md"
                disabled={formStatus === "submitting"}
                required
              />
              <Button
                type="submit"
                className="bg-[#f4a261] hover:bg-[#e76f51] text-white w-full sm:w-auto text-base sm:text-lg px-6 py-3 md:px-8 md:py-4 rounded-md"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-green-400 text-sm sm:text-base"
                  >
                    Message sent! We’ll get back to you soon.
                  </motion.p>
                )}
                {formStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-red-400 text-sm sm:text-base"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
