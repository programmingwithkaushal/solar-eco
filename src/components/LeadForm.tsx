"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  city: z.string().min(2, { message: "City is required." }),
  monthly_bill: z.string().min(1, { message: "Monthly bill is required." }),
  roof_type: z.string().min(1, { message: "Roof type is required." }),
  capacity: z.string().min(1, { message: "Capacity is required." }),
});

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      monthly_bill: "",
      roof_type: "",
      capacity: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // API call to store lead
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Redirect to WhatsApp Group
        const groupUrl = process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";
        window.location.href = groupUrl;
      } else {
        console.error("Failed to submit lead");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-primary/20 shadow-lg shadow-primary/5 bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">Request Received!</h3>
          <p className="text-muted-foreground">Redirecting you to WhatsApp to chat with our experts...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border shadow-xl bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-center">Get Free Consultation</CardTitle>
        <CardDescription className="text-center">Fill out the form below and we'll calculate your exact savings.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Full Name" {...form.register("name")} className="bg-slate-50" />
            {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Input placeholder="Phone Number (10 digits)" {...form.register("phone")} className="bg-slate-50" />
            {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Input placeholder="City" {...form.register("city")} className="bg-slate-50" />
            {form.formState.errors.city && <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Select onValueChange={(val: any) => form.setValue("monthly_bill", val as string)}>
                <SelectTrigger className="bg-slate-50">
                  <SelectValue placeholder="Monthly Bill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under ₹2,000">Under ₹2,000</SelectItem>
                  <SelectItem value="₹2,000 - ₹5,000">₹2,000 - ₹5,000</SelectItem>
                  <SelectItem value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="Above ₹10,000">Above ₹10,000</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.monthly_bill && <p className="text-sm text-red-500">{form.formState.errors.monthly_bill.message}</p>}
            </div>

            <div className="space-y-2">
              <Select onValueChange={(val: any) => form.setValue("roof_type", val as string)}>
                <SelectTrigger className="bg-slate-50">
                  <SelectValue placeholder="Roof Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Concrete (RCC)">Concrete (RCC)</SelectItem>
                  <SelectItem value="Metal Sheet">Metal Sheet</SelectItem>
                  <SelectItem value="Asbestos/Other">Asbestos/Other</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.roof_type && <p className="text-sm text-red-500">{form.formState.errors.roof_type.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Select onValueChange={(val: any) => form.setValue("capacity", val as string)}>
              <SelectTrigger className="bg-slate-50">
                <SelectValue placeholder="Interested Capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Not Sure - Need Advice">Not Sure - Need Advice</SelectItem>
                <SelectItem value="1-3 kW (Small Home)">1-3 kW (Small Home)</SelectItem>
                <SelectItem value="3-5 kW (Medium Home)">3-5 kW (Medium Home)</SelectItem>
                <SelectItem value="5-10+ kW (Large/Commercial)">5-10+ kW (Large/Commercial)</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.capacity && <p className="text-sm text-red-500">{form.formState.errors.capacity.message}</p>}
          </div>

          <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
