const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-lg italic text-foreground">The Infinity Print</p>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-muted-foreground text-sm">© 2024 Infinity Print</p>
      </div>
    </footer>
  );
};

export default Footer;
