import { motion } from "framer-motion";
import heroImg from "@/assets/hero-printing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Printing studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background leading-[1.05] mb-6">
            Print bold,{" "}
            <em>light bright,</em>{" "}
            stand out
          </h1>
          <p className="text-background/70 text-lg md:text-xl max-w-xl mb-10 font-body">
            The Infinity Print transforms your vision into vibrant reality.
            From digital precision to architectural light, we deliver excellence
            that commands attention.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="px-6 py-3 rounded-md bg-background text-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-background/40 text-background text-sm font-medium hover:bg-background/10 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
