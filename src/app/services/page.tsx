import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Factory, Wrench, SunMedium, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { icon: Home, title: "Residential Solar", desc: "Complete rooftop solar solutions for homes, designed to eliminate your electricity bills and increase property value." },
    { icon: Building2, title: "Commercial Solar", desc: "Scalable solar installations for offices, schools, and hospitals to reduce operational costs." },
    { icon: Factory, title: "Industrial Solar", desc: "High-capacity MW scale projects for factories and manufacturing units with heavy power requirements." },
    { icon: Wrench, title: "Solar Maintenance", desc: "Comprehensive AMC packages including cleaning, inspection, and performance monitoring." },
    { icon: SunMedium, title: "Panel Cleaning", desc: "Professional automated and manual cleaning services to maintain maximum generation efficiency." },
    { icon: ShieldCheck, title: "Net Metering Assistance", desc: "End-to-end support for DISCOM approvals, subsidies, and net meter installation." },
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">End-to-end solar energy solutions tailored for your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
