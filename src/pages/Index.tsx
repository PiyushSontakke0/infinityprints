import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import ServicesBento from "@/components/ServicesBento";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Capabilities />
      <ServicesBento />
      <About />
      <Testimonials />
      <ClientMarquee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
