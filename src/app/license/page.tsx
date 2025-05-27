import { Camera, ExternalLink, Download, Heart, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function UnsplashLicense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Camera className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                InstaSearch
              </span>
            </Link>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Camera className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Unsplash License</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the license for all images you find through InstaSearch
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* What is Unsplash License */}
            <Card>
              <CardHeader>
                <CardTitle>What is the Unsplash License?</CardTitle>
                <CardDescription>
                  The simple, generous license that comes with every Unsplash photo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All photos on Unsplash are released under the{" "}
                  <a 
                    href="https://unsplash.com/license" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Unsplash License <ExternalLink className="h-3 w-3" />
                  </a>
                  , which is one of the most generous licenses available for stock photography.
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="font-medium text-green-800 dark:text-green-200">
                    🎉 The best part? Almost all uses are allowed, including commercial projects!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What You Can Do */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-green-500" />
                  What you can do with Unsplash photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">Commercial Use</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• Use in websites and apps</li>
                      <li>• Print in marketing materials</li>
                      <li>• Include in products you sell</li>
                      <li>• Use for client projects</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="font-medium">Personal Use</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• Social media posts</li>
                      <li>• Blog articles</li>
                      <li>• Personal projects</li>
                      <li>• School presentations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>No permission needed!</strong> You can download and use any Unsplash photo right away.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What You Can't Do */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-500" />
                  What you can't do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The Unsplash License is generous, but there are a few restrictions to keep in mind:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Don't sell unaltered photos</strong> - You can't resell the photos as stock photography or compete with Unsplash
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Don't imply endorsement</strong> - You can't suggest that people or brands in photos endorse your product
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Don't use for harmful content</strong> - No using photos for illegal, harmful, or offensive purposes
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Don't redistribute as-is</strong> - You can't create a competing stock photo website with Unsplash content
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attribution */}
            <Card>
              <CardHeader>
                <CardTitle>Do I need to give credit?</CardTitle>
                <CardDescription>
                  Attribution isn't required, but it's appreciated
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                    Attribution is not required, but photographers love it!
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    When possible, it's nice to credit the photographer and link back to their Unsplash profile.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">If you want to give credit, here's how:</h4>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium">Simple format:</p>
                    <code className="text-sm bg-background px-2 py-1 rounded">
                      Photo by [Photographer Name] on Unsplash
                    </code>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium">With link:</p>
                    <code className="text-sm bg-background px-2 py-1 rounded block">
                      Photo by &lt;a href="[photographer_profile]"&gt;[Photographer Name]&lt;/a&gt; on &lt;a href="https://unsplash.com"&gt;Unsplash&lt;/a&gt;
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How InstaSearch Helps */}
            <Card>
              <CardHeader>
                <CardTitle>How InstaSearch helps with licensing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When you download images through InstaSearch, I try to make licensing easy:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Direct links to Unsplash</strong> - Every image links back to its original Unsplash page where you can find photographer details
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Photographer info</strong> - When available, I show the photographer's name and profile
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>License reminder</strong> - I remind you that all images follow the Unsplash License
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <a 
                      href="https://unsplash.com/license" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Read Full Unsplash License <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Remember:</strong> InstaSearch is just a search interface. All images, licensing, and terms come directly from Unsplash. 
              Always check the{" "}
              <a 
                href="https://unsplash.com/license" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                official Unsplash License
              </a>
              {" "}for the most up-to-date information.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
