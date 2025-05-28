import { Search, Filter, Smartphone, Moon, Download, Zap, Palette, Grid, Eye, Heart, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function Features() {
  const features = [
    {      icon: Search,
      title: "Instant Search",
      description: "Type what you&apos;re looking for and get relevant results from millions of high-quality photos instantly.",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-950/20"
    },
    {
      icon: Filter,
      title: "Smart Filters",
      description: "Narrow down results by orientation, colors, popularity, and more to find exactly what you need.",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-950/20"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Works perfectly on any device - phone, tablet, or desktop. Built with mobile users in mind.",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-950/20"
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description: "Easy on the eyes with beautiful dark theme support. Perfect for late-night design sessions.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-950/20"
    },
    {
      icon: Download,
      title: "Multiple Download Sizes",
      description: "Choose from small, regular, or full resolution downloads based on your project needs.",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-950/20"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "No loading spinners or slow pages. Everything loads instantly so you can focus on finding great images.",
      color: "text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-950/20"
    },
    {
      icon: Palette,
      title: "Color Filtering",
      description: "Find images that match your design palette with advanced color-based search and filtering.",
      color: "text-pink-500",
      bgColor: "bg-pink-100 dark:bg-pink-950/20"
    },
    {
      icon: Grid,
      title: "Clean Grid Layout",
      description: "Beautiful masonry grid that adapts to your screen size and showcases images perfectly.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-950/20"
    },
    {
      icon: Eye,
      title: "Image Preview",
      description: "Click any image to see full details, photographer info, and download options in a clean modal.",
      color: "text-teal-500",
      bgColor: "bg-teal-100 dark:bg-teal-950/20"
    }
  ]

  const upcomingFeatures = [
    {
      icon: Heart,
      title: "Favorites System",
      description: "Save images you love for later use and organize them into collections."
    },
    {
      icon: Layers,
      title: "Collections",
      description: "Organize your saved images into custom folders and share them with your team."
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Natural language search that understands what you really mean when you describe an image."
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to find 
              <span className="block text-primary">perfect images</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              InstaSearch is packed with features that make discovering and downloading beautiful photos 
              from Unsplash faster and more enjoyable than ever before.
            </p>
          </div>

          {/* Current Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What&apos;s Available Now</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These features are live and ready to use in InstaSearch today
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Using InstaSearch is incredibly simple - just three steps to get the perfect image
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Search</h3>                <p className="text-muted-foreground">
                  Type what you&apos;re looking for in the search bar. Be specific for better results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Filter</h3>
                <p className="text-muted-foreground">
                  Use filters to narrow down results by orientation, colors, or popularity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Download</h3>
                <p className="text-muted-foreground">
                  Click any image to view details and choose your preferred download size.
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>              <p className="text-muted-foreground max-w-2xl mx-auto">
                I&apos;m constantly working on new features to make InstaSearch even better
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="border-dashed border-2 border-muted-foreground/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-xl text-muted-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                No crazy timelines or promises - just building when I can! 
                <Link href="/contact" className="text-primary hover:underline ml-1">
                  Got ideas? Let me know!
                </Link>
              </p>
            </div>
          </div>

          {/* Why Choose InstaSearch */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-purple/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Why Choose InstaSearch?</CardTitle>
                <CardDescription className="text-lg">
                  What makes us different from other stock photo sites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">✨ Built for Simplicity</h4>
                    <p className="text-muted-foreground">
                      No account required, no complex menus, no confusing interfaces. 
                      Just search, find, and download.
                    </p>
                    
                    <h4 className="font-semibold text-lg">🚀 Actually Fast</h4>
                    <p className="text-muted-foreground">
                      Built with modern web technologies for instant loading and smooth interactions. 
                      No waiting around.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">📱 Mobile-First</h4>
                    <p className="text-muted-foreground">
                      Designed for mobile users first, then enhanced for desktop. 
                      Works perfectly on any device.
                    </p>
                    
                    <h4 className="font-semibold text-lg">🎨 Designer-Friendly</h4>
                    <p className="text-muted-foreground">
                      Built by a developer who understands design workflows. 
                      Every feature is crafted with designers in mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Find Amazing Images?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Start exploring millions of beautiful, high-quality photos from Unsplash. 
                  No signup required, no credits to buy - just great images when you need them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/search">
                      <Search className="h-4 w-4 mr-2" />
                      Start Searching
                    </Link>
                  </Button>                  <Button asChild variant="outline" size="lg">
                    <Link href="/">
                      <Image 
                        src="/logo.png" 
                        alt="Logo" 
                        width={16} 
                        height={16} 
                        className="h-4 w-4 mr-2" 
                      />
                      View Homepage
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
