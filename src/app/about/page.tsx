import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About SolarEco</h1>
          <p className="text-lg text-muted-foreground">Leading the transition to sustainable energy across India since 2015.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/hero-bg.png" 
              alt="Our Team" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe that clean energy should be accessible and affordable for everyone. Our mission is to accelerate the adoption of solar power in India by providing high-quality, cost-effective installations backed by exceptional customer service.
            </p>
            <ul className="space-y-4">
              {[
                "Over 5,000 successful installations",
                "ISO 9001:2015 Certified Company",
                "Tier-1 Solar Panels & Inverters",
                "25-Year Performance Warranty",
                "Award-winning customer support"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
