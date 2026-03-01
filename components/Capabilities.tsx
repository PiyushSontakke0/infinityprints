"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
// image assets moved to public/; paths used in the capabilities array below

const capabilities = [
  {
    title: "Digital printing solutions",
    description: "Fast turnaround on custom prints with vibrant color accuracy and premium finishes for any application.",
    image: "/uv-printing.jpg",
  },
  {
    title: "Signage & light boards",
    description: "Illuminated architectural solutions that transform facades and storefronts into stunning visual landmarks.",
    image: "/signage-lightboard.jpg",
  },
  {
    title: "CNC & laser cutting",
    description: "Precision cutting and carving in metal, wood and acrylic for intricate architectural elements.",
    image: "/cnc-cutting.jpg",
  },
];

const Capabilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-xl">
            What we bring to your project
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Three distinct disciplines working in harmony to elevate your brand presence and architectural vision across every medium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
