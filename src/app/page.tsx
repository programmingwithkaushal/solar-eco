import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LeadForm } from "@/components/LeadForm";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { CheckCircle2, ShieldCheck, Zap, Sun, Banknote, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Solar Panels on Modern Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary-foreground mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              India's #1 Solar Installation Company
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight">
              Affordable Solar Installation at the <span className="text-primary">Lowest Cost</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Complete Solar Solutions for Homes and Businesses. Installation, Wiring, Net Metering Support and Long-Term Maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#quote" className="inline-flex h-9 shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 gap-1.5 px-2.5 text-lg py-6 sm:px-8 rounded-full shadow-lg shadow-primary/30">
                Get Free Quote
              </Link>
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE"} target="_blank" className="inline-flex h-9 shrink-0 items-center justify-center bg-clip-padding font-medium whitespace-nowrap outline-none select-none gap-1.5 px-2.5 text-lg py-6 sm:px-8 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 border border-white/20 backdrop-blur-md transition-all">
                Join WhatsApp Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose SolarEco?</h2>
            <p className="text-muted-foreground text-lg">We provide premium solar solutions with unmatched reliability and support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Banknote, title: "Lowest Cost Installation", desc: "We offer the most competitive pricing in the market without compromising on quality." },
              { icon: Sun, title: "High Efficiency Panels", desc: "Top-tier monocrystalline panels ensuring maximum power output even in low light." },
              { icon: ShieldCheck, title: "Professional Team", desc: "Certified engineers and technicians with years of installation experience." },
              { icon: Zap, title: "Electricity Bill Savings", desc: "Reduce your monthly electricity bills by up to 90% immediately after installation." },
              { icon: Zap, title: "Fast Installation", desc: "Quick and hassle-free installation process completed within promised timelines." },
              { icon: Wrench, title: "Long-Term Support", desc: "25-year performance warranty and dedicated maintenance support." },
            ].map((feature, i) => (
              <Card key={i} className="border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Your journey to clean, affordable energy in 5 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {[
              { step: 1, title: "Submit Details", desc: "Fill out our simple form with your basic requirements." },
              { step: 2, title: "Free Consultation", desc: "Our experts will contact you to discuss your needs." },
              { step: 3, title: "Site Inspection", desc: "We visit your property to design the optimal system." },
              { step: 4, title: "Installation", desc: "Professional installation by our certified team." },
              { step: 5, title: "Start Saving", desc: "System goes live. Watch your electricity bills drop." },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-400 mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator & Form Section */}
      <section id="quote" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Discover Your Savings</h2>
                <p className="text-slate-300 text-lg">Use our calculator to estimate your savings, then request a free, no-obligation consultation with our solar experts.</p>
              </div>
              <SavingsCalculator />
            </div>
            
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Plans */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Solar Plans</h2>
            <p className="text-muted-foreground text-lg mb-2">Price depends on roof size and location.</p>
            <p className="text-sm font-medium text-primary">Contact us for a precise quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Small Plan", size: "1-3 kW", desc: "Perfect for small homes with basic appliances.", features: ["2-6 Solar Panels", "1-3kW Inverter", "Basic Mounting Structure", "Standard Wiring"] },
              { title: "Medium Plan", size: "3-5 kW", desc: "Ideal for average homes with ACs and geysers.", features: ["6-10 Solar Panels", "3-5kW Premium Inverter", "Galvanized Structure", "Upgraded Wiring", "Net Metering Support"], popular: true },
              { title: "Large Plan", size: "5-10+ kW", desc: "Designed for large homes and commercial spaces.", features: ["10+ Solar Panels", "High-capacity Inverter", "Heavy-duty Structure", "Premium Wiring", "Priority Net Metering", "Free 1st Year Maintenance"] },
            ].map((plan, i) => (
              <Card key={i} className={`relative border-border shadow-sm overflow-hidden ${plan.popular ? 'border-primary ring-1 ring-primary shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-2">{plan.title}</h3>
                  <div className="text-4xl font-extrabold text-primary mb-4">{plan.size}</div>
                  <p className="text-muted-foreground mb-8 min-h-[48px]">{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-sm text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#quote" className={plan.popular ? "inline-flex h-9 w-full shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 gap-1.5 px-2.5" : "inline-flex h-9 w-full shrink-0 items-center justify-center bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground border border-border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none gap-1.5 px-2.5"}>
                    Inquire Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about switching to solar.</p>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">How much does a solar installation cost?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                The cost varies depending on the capacity (kW) required, roof size, and location. Our pricing is highly competitive. Contact us for a free site inspection and precise quote tailored to your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">What is Net Metering?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If your panels produce more electricity than you use, the excess goes to the grid, and you get credited for it on your next bill.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">Are there government subsidies available?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes, the Indian government offers significant subsidies for residential solar installations. We assist our customers with all the paperwork required to claim these subsidies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">How long does installation take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                The physical installation typically takes 2-4 days. However, the entire process, including approvals and net metering setup from the electricity board, can take 2-4 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg">What maintenance is required?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Solar panels require very little maintenance. Occasional cleaning (once every 2-4 weeks) to remove dust and debris ensures maximum efficiency. We also offer affordable maintenance packages.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
