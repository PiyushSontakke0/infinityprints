"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Contact</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Let's start your next project
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to transform your brand presence? Get in touch and let's discuss how we can bring your vision to life.
            </p>

            <a
              href="mailto:infinityprintandsignage@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get a quote
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Office</p>
                <p className="text-muted-foreground text-sm">17/A, First Floor, Jilani Mansion, Kolsa Street, Pydhonie, Masjid Bunder, Mumbai — 400003</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Factory</p>
                <p className="text-muted-foreground text-sm">Beside Lupin Limited, Plot No. A-7/A-1, Chikalthana MIDC, Chh. Sambhajinagar — 431006</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <p className="text-muted-foreground text-sm">infinityprintandsignage@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Phone</p>
                <p className="text-muted-foreground text-sm">+91 8888314542 / +91 9403860848</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
