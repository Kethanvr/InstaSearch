import { FileText, CheckCircle, XCircle, AlertTriangle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="InstaSearch Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8" 
              />
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
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These terms are pretty straightforward, but I need to cover the legal basics.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 2025</p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* The Deal */}
            <Card>
              <CardHeader>
                <CardTitle>The deal</CardTitle>
                <CardDescription>
                  What InstaSearch is and how you can use it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  InstaSearch is free to use. I built it as a simple way to search and download images from Unsplash. 
                  You can use it for personal projects, commercial work, whatever you need.
                </p>
              </CardContent>
            </Card>

            {/* What You Can Do */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What you can do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Search for images
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Download images for any purpose
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Use the app on any device
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Share the app with others
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What You Can't Do */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  What you can't do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    Try to break or hack the app
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    Use it for anything illegal
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    Claim you built it
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    Overwhelm the servers with automated requests
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* About the Images */}
            <Card>
              <CardHeader>                <CardTitle className="flex items-center gap-2">
                  <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={20} 
                    height={20} 
                    className="h-5 w-5" 
                  />
                  About the images
                </CardTitle>
              </CardHeader>              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">
                      Important: All images come from Unsplash, not me. Each image has its own license terms.
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Most Unsplash images are free to use for any purpose
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Some may require attribution to the photographer
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Always check the specific license for images you download
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    I'm not responsible for how you use the images
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground italic mt-4">
                  InstaSearch just helps you find and download them - the actual licensing is between you and Unsplash.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I built InstaSearch in my spare time and do my best to keep it working well, but:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    The app is provided "as is" without warranties
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    I can't guarantee it'll work perfectly 100% of the time
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    Unsplash's API might have outages (not my fault!)
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    I'm not liable for any issues that arise from using the app
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Service availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I plan to keep InstaSearch running, but I reserve the right to:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Make updates and improvements
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Temporarily take it offline for maintenance
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Discontinue the service (with advance notice)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Feedback and disputes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Got a problem or suggestion? Email me and I'll do my best to help.
                </p>
                <p className="text-sm text-muted-foreground">
                  For legal disputes (hopefully never needed), these terms are governed by Indian law.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href="mailto:kethanvr@gmail.com">
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://github.com/Kethanvr" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              Thanks for using InstaSearch! I hope it makes finding great images a little easier for you.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
