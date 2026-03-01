import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "10+", label: "Years of experience" },
  { value: "50+", label: "Active clients" },
  { value: "100%", label: "Quality commitment" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">About us</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8">
              Built on craft, driven by precision
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Infinity Print and Signage Industries, we are a dynamic and innovative printing and signage
              company committed to providing exceptional service to our valued clients. With a strong foundation
              built on years of experience, we have established ourselves as a trusted name in the industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We consistently strive to deliver high-quality work, meet deadlines, and go above and beyond to
              achieve outstanding results. A strong work ethic fosters a culture of productivity and professionalism
              that our clients rely on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-background p-8 md:p-10"
                >
                  <div className="font-heading text-4xl md:text-5xl text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-8 rounded-lg bg-foreground text-background">
              <p className="font-heading text-xl italic leading-relaxed mb-4">
                "We consistently strive to deliver high-quality work, meet deadlines, and go above and beyond to achieve outstanding results."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-sm font-medium">
                  S
                </div>
                <div>
                  <p className="text-sm font-medium">Saurabh S. Dhole</p>
                  <p className="text-xs text-background/60">Co-Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
