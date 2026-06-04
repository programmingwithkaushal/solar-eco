import { LeadForm } from "@/components/LeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 pt-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-heading mb-6">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-1">Phone / WhatsApp</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-slate-600">info@solareco.in</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-1">Office Location</h3>
                  <p className="text-slate-600">123 Green Energy Park, Tech Hub Area, New Delhi, 110001</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-1">Working Hours</h3>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center border border-border mt-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-300 opacity-50 flex items-center justify-center text-slate-500 font-medium">
                Google Map Embedded Here
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
