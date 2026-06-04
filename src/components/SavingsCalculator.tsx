"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export function SavingsCalculator() {
  const [bill, setBill] = useState(3000);
  
  // Approximate calculations (can be adjusted to real Indian solar metrics)
  const annualSavings = bill * 12 * 0.9; // 90% savings
  const fiveYearSavings = annualSavings * 5;
  const tenYearSavings = annualSavings * 10;
  
  const requiredCapacity = Math.max(1, Math.round(bill / 1000)); // rough estimate

  return (
    <Card className="border-border shadow-xl">
      <CardHeader className="bg-primary/5 border-b border-border/50">
        <CardTitle className="text-2xl font-heading text-center">Cost Savings Calculator</CardTitle>
        <CardDescription className="text-center">See how much you can save by switching to solar</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <Label className="text-base font-semibold">Average Monthly Electricity Bill</Label>
              <span className="text-xl font-bold text-primary">₹{bill.toLocaleString()}</span>
            </div>
            <Slider
              value={[bill]}
              min={1000}
              max={20000}
              step={500}
              onValueChange={(val: any) => setBill(Array.isArray(val) ? val[0] : (typeof val === 'number' ? val : val[0]))}
              className="py-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
            <motion.div 
              key={annualSavings}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 p-4 rounded-xl text-center border border-green-100"
            >
              <p className="text-sm text-green-600 font-medium mb-1">1 Year Savings</p>
              <p className="text-2xl font-bold text-green-700">₹{annualSavings.toLocaleString()}</p>
            </motion.div>
            
            <motion.div 
              key={fiveYearSavings}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-green-50 p-4 rounded-xl text-center border border-green-100"
            >
              <p className="text-sm text-green-600 font-medium mb-1">5 Year Savings</p>
              <p className="text-2xl font-bold text-green-700">₹{fiveYearSavings.toLocaleString()}</p>
            </motion.div>

            <motion.div 
              key={tenYearSavings}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-green-50 p-4 rounded-xl text-center border border-green-100"
            >
              <p className="text-sm text-green-600 font-medium mb-1">10 Year Savings</p>
              <p className="text-2xl font-bold text-green-700">₹{tenYearSavings.toLocaleString()}</p>
            </motion.div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Recommended System Size</p>
              <p className="text-lg font-bold text-foreground">{requiredCapacity} kW - {requiredCapacity + 2} kW</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-500">ROI Time</p>
              <p className="text-lg font-bold text-primary">~3.5 Years</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
