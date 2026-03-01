"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
// image assets are now served from public/; URLs below

const services = [
  { title: "Custom branding", description: "Tailored print solutions that capture your brand identity and resonate with your audience.", image: "/uv-printing.jpg" },
  { title: "Signage systems", description: "Strategic placement and design that guides customers while reinforcing your message.", image: "/signage-lightboard.jpg" },
  { title: "Display solutions", description: "Versatile installations that adapt to retail, corporate, and event environments.", image: "/backlit-board.jpg" },
  { title: "Wallpapers & blinds", description: "Custom wallpaper printing and premium blind installations for interiors.", image: "/wallpapers.jpg" },
  { title: "Stretch ceilings", description: "Modern ceiling solutions with integrated lighting for commercial and residential spaces.", image: "/stretch-ceiling.jpg" },
  { title: "CNC & laser work", description: "Precision cutting and carving in metal, wood and acrylic for any application.", image: "/cnc-cutting.jpg" },
];

const ServicesBento = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
              Everything you need
            </h2>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-sm text-foreground font-medium group">
            View all services
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {services.map((service, i) => {
            const isWide = i === 0 || i === 5;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${isWide ? "lg:col-span-2" : ""
                  }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl text-background mb-1">{service.title}</h3>
                  <p className="text-background/70 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
