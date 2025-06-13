"use client";

import { motion } from "framer-motion";
import { Search, Wand2, Filter, Zap, Shield, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Search through millions of high-quality images with our powerful search engine",
    color: "text-foreground",
  },
  {
    icon: Wand2,
    title: "AI Image Generation",
    description:
      "Create unique images from text prompts using Google's Gemini AI technology",
    color: "text-foreground",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description:
      "Filter by orientation, color, popularity and more to find exactly what you need",
    color: "text-foreground",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with modern technology for blazing fast search and generation speeds",
    color: "text-foreground",
  },
  {
    icon: Shield,
    title: "Free & Legal",
    description:
      "All images are free to use under Unsplash license with proper attribution",
    color: "text-foreground",
  },
  {
    icon: Palette,
    title: "Creative Focus",
    description:
      "Curated collection of creative, artistic, and AI-generated photography",
    color: "text-foreground",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose InstaSearch?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and create the perfect image for your project with our
            advanced search and AI generation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-md transition-all duration-300 border-border/50 bg-card/50">
                <div className="flex flex-col items-start text-left">
                  <div
                    className={`p-3 rounded-lg bg-muted/50 ${feature.color} mb-4`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
