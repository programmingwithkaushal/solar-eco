"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "Modern Villa Installation", category: "Residential", capacity: "5 kW", location: "Delhi", img: "/hero-bg.png" },
  { id: 2, title: "Tech Park Rooftop", category: "Commercial", capacity: "50 kW", location: "Gurgaon", img: "/hero-bg.png" },
  { id: 3, title: "Manufacturing Unit", category: "Industrial", capacity: "200 kW", location: "Noida", img: "/hero-bg.png" },
  { id: 4, title: "Independent House", category: "Residential", capacity: "3 kW", location: "Faridabad", img: "/hero-bg.png" },
  { id: 5, title: "Hospital Building", category: "Commercial", capacity: "30 kW", location: "Delhi", img: "/hero-bg.png" },
  { id: 6, title: "Farm House", category: "Residential", capacity: "10 kW", location: "Gurgaon", img: "/hero-bg.png" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-muted-foreground">Browse our portfolio of successful solar installations.</p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {["All", "Residential", "Commercial", "Industrial"].map(cat => (
            <Button 
              key={cat} 
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <Card key={project.id} className="overflow-hidden border-border group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Capacity: <strong className="text-slate-900">{project.capacity}</strong></span>
                  <span>Location: <strong className="text-slate-900">{project.location}</strong></span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
