import {
  Search,
  Filter,
  Smartphone,
  Moon,
  Download,
  Zap,
  Palette,
  Grid,
  Eye,
  Heart,
  Layers,
  Wand2,
  Sparkles,
  Bot,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Features() {
  const features = [
    {
      icon: Wand2,
      title: "AI Image Generation",
      description:
        "Create unique, stunning images from text descriptions using our advanced InstaSearch AI model. No limits, endless creativity.",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-950/20",
      featured: true,
    },
    {
      icon: Search,
      title: "Instant Search",
      description:
        "Search through millions of high-quality photos instantly with our powerful search engine.",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-950/20",
    },
    {
      icon: Bot,
      title: "AI Chat Interface",
      description:
        "Generate images through natural conversation. Describe what you want and our AI will create it for you.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-100 dark:bg-emerald-950/20",
      featured: true,
    },
    {
      icon: Filter,
      title: "Smart Filters",
      description:
        "Narrow down results by orientation, colors, popularity, and more to find exactly what you need.",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-950/20",
    },
    {
      icon: Sparkles,
      title: "Creative AI Models",
      description:
        "Multiple AI models optimized for different types of image generation - from photorealistic to artistic styles.",
      color: "text-pink-500",
      bgColor: "bg-pink-100 dark:bg-pink-950/20",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Works perfectly on any device - phone, tablet, or desktop. Built with mobile users in mind.",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-950/20",
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description:
        "Easy on the eyes with beautiful dark theme support. Perfect for late-night design sessions.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-950/20",
    },
    {
      icon: Download,
      title: "Instant Downloads",
      description:
        "Download your generated images or search results in high quality instantly. No watermarks, no restrictions.",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-950/20",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Advanced caching and optimization ensure everything loads instantly so you can focus on creating.",
      color: "text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-950/20",
    },
    {
      icon: Palette,
      title: "Color Intelligence",
      description:
        "AI-powered color analysis helps you find images that match your design palette perfectly.",
      color: "text-pink-500",
      bgColor: "bg-pink-100 dark:bg-pink-950/20",
    },
    {
      icon: Grid,
      title: "Clean Grid Layout",
      description:
        "Beautiful responsive grid that adapts to your screen size and showcases images perfectly.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-950/20",
    },
    {
      icon: Eye,
      title: "Smart Preview",
      description:
        "Click any image to see full details and options in a clean, intuitive interface.",
      color: "text-teal-500",
      bgColor: "bg-teal-100 dark:bg-teal-950/20",
    },
  ];

  const aiFeatures = [
    {
      icon: Wand2,
      title: "Text-to-Image Generation",
      description:
        "Describe any image in natural language and watch our AI bring it to life with stunning detail and creativity.",
    },
    {
      icon: Bot,
      title: "Conversational Interface",
      description:
        "Chat with our AI like you would with a human designer. Refine ideas, ask for variations, get exactly what you need.",
    },
    {
      icon: Sparkles,
      title: "Style Control",
      description:
        "Generate images in any style - photorealistic, artistic, cartoon, abstract, or any aesthetic you can imagine.",
    },
    {
      icon: ImageIcon,
      title: "Unlimited Creativity",
      description:
        "No stock photo limitations. Create exactly what you envision, from impossible scenes to perfect product shots.",
    },
  ];

  const upcomingFeatures = [
    {
      icon: Heart,
      title: "AI Learning",
      description:
        "Our AI learns your style preferences to suggest and generate images that match your creative vision.",
    },
    {
      icon: Layers,
      title: "Smart Collections",
      description:
        "AI-powered organization that automatically categorizes and tags your generated and saved images.",
    },
    {
      icon: Search,
      title: "Advanced AI Search",
      description:
        "Search using natural language, emotions, or concepts. Find images based on mood, feeling, or abstract ideas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full">
                <Wand2 className="h-12 w-12 text-purple-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Future of Image
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Discovery & Creation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              InstaSearch combines powerful image search with cutting-edge AI
              generation. Find existing images or create entirely new ones with
              our advanced AI models.
            </p>
          </div>

          {/* AI Features Highlight */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Powered by InstaSearch AI</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Revolutionary AI Image Generation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our advanced AI models can create any image you can imagine,
                from photorealistic scenes to artistic masterpieces
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-purple-500" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link href="/ai-chat">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Try AI Generation
                </Link>
              </Button>
            </div>
          </div>

          {/* All Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Feature Set</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for image discovery and creation in one
                powerful platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      feature.featured
                        ? "ring-2 ring-purple-200 dark:ring-purple-800"
                        : ""
                    }`}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {feature.title}
                        {feature.featured && (
                          <Sparkles className="h-4 w-4 text-purple-500" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get the perfect image in just a few simple steps - whether
                searching or creating
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Search or Describe
                </h3>
                <p className="text-muted-foreground">
                  Search existing images or describe what you want to create
                  with AI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our advanced AI models process your request and generate or
                  find perfect images.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Refine & Perfect</h3>
                <p className="text-muted-foreground">
                  Use filters, chat with AI, or request variations to get
                  exactly what you need.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-500">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Download</h3>
                <p className="text-muted-foreground">
                  Download your perfect image in high quality, ready for any
                  project.
                </p>
              </div>
            </div>
          </div>

          {/* Future Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We&apos;re constantly improving InstaSearch with cutting-edge AI
                technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-dashed border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/10 dark:to-pink-950/10"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-purple-500/70" />
                      </div>
                      <CardTitle className="text-xl text-muted-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Why Choose InstaSearch */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-purple-200/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  Why Choose InstaSearch?
                </CardTitle>
                <CardDescription className="text-lg">
                  The most advanced image platform combining search and AI
                  generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Wand2 className="h-5 w-5 text-purple-500" />
                      Revolutionary AI Technology
                    </h4>
                    <p className="text-muted-foreground">
                      Our proprietary AI models create images that are
                      indistinguishable from professional photography, giving
                      you unlimited creative possibilities.
                    </p>

                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Zap className="h-5 w-5 text-orange-500" />
                      Unmatched Speed
                    </h4>
                    <p className="text-muted-foreground">
                      Advanced optimization and caching make InstaSearch the
                      fastest image platform available. Generate or find images
                      in seconds, not minutes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-purple-500" />
                      Perfect on Any Device
                    </h4>
                    <p className="text-muted-foreground">
                      Built mobile-first with progressive enhancement. Whether
                      you&apos;re on phone, tablet, or desktop, InstaSearch
                      adapts perfectly to your workflow.
                    </p>

                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Palette className="h-5 w-5 text-pink-500" />
                      Creative Freedom
                    </h4>
                    <p className="text-muted-foreground">
                      No more searching through stock photos hoping to find the
                      right image. Create exactly what you envision with our
                      advanced AI models.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-purple-200/50 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Create Amazing Images?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience the future of image creation and discovery. Search
                  millions of images or generate exactly what you need with our
                  advanced AI technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Link href="/ai-chat">
                      <Wand2 className="h-4 w-4 mr-2" />
                      Create with AI
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-200 hover:bg-purple-50"
                  >
                    <Link href="/search">
                      <Search className="h-4 w-4 mr-2" />
                      Search Images
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
