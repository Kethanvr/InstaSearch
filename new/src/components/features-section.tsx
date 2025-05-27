"use client"

import { motion } from "framer-motion"
import { Search, Download, Filter, Zap, Shield, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Search,
    title: "Advanced Search",
    description: "Search through millions of high-quality images with our powerful search engine",
    color: "text-blue-500"
  },
  {
    icon: Download,
    title: "High-Quality Downloads",
    description: "Download images in various resolutions, from thumbnails to full HD",
    color: "text-green-500"
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Filter by orientation, color, popularity and more to find exactly what you need",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with modern technology for blazing fast search and download speeds",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Free & Legal",
    description: "All images are free to use under Unsplash license with proper attribution",
    color: "text-red-500"
  },
  {
    icon: Palette,
    title: "Creative Focus",
    description: "Curated collection of creative, artistic, and professional photography",
    color: "text-indigo-500"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Why Choose InstaSearch?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect image for your project with our advanced search and filtering capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-background to-muted/50 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3M+", label: "Images Available" },
              { number: "50K+", label: "Happy Users" },
              { number: "1M+", label: "Downloads" },
              { number: "24/7", label: "Always Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="p-6"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
