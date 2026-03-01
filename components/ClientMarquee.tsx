const clients = [
  "Bharat Petroleum", "BSNL", "Honda", "Bajaj", "SBI", "TVS", "Hyundai",
  "Bharat Petroleum", "BSNL", "Honda", "Bajaj", "SBI", "TVS", "Hyundai",
];

const ClientMarquee = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <div className="section-container mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest text-center">
          Trusted by leading companies
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {clients.map((client, i) => (
            <div key={i} className="flex-shrink-0 mx-10 flex items-center">
              <span className="text-xl font-medium text-muted-foreground/60 whitespace-nowrap font-body">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
