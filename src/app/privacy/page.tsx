import { Shield, Eye, Server, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy matters. Here&apos;s how InstaSearch handles your data - kept simple and transparent.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 2025</p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* What We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  What I collect
                </CardTitle>
                <CardDescription>
                  The short version: Almost nothing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">                <p className="text-muted-foreground">
                  InstaSearch doesn&apos;t require you to create an account or provide personal information. Here&apos;s what happens when you use the app:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Search queries</strong> - When you search for images, that request goes directly to Unsplash&apos;s API. I don&apos;t store or track your searches.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Usage analytics</strong> - I use basic web analytics to see how many people visit the site and which features are popular. This is anonymous data (no names, emails, or personal info).
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Technical logs</strong> - Like most websites, the server keeps basic logs for security and performance monitoring.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What We Don't Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  What I don&apos;t collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No email addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No personal information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No user accounts (yet)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No cross-site tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No selling data to anyone
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    No advertising cookies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-party Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Third-party services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold">Unsplash API</h4>                  <p className="text-sm text-muted-foreground">
                    All images come from Unsplash. When you search or download images, you&apos;re interacting with their service.{" "}
                    <a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Check Unsplash&apos;s Privacy Policy
                    </a>
                  </p>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold">Vercel (hosting)</h4>
                  <p className="text-sm text-muted-foreground">
                    The app is hosted on Vercel, which handles the technical infrastructure.{" "}
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      See Vercel&apos;s Privacy Policy
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Your rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">                <p className="text-muted-foreground">
                  Since I collect almost no personal data, there isn&apos;t much to manage. But if you have concerns:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    You can clear your browser data anytime to remove stored preferences
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Contact me at kethanvr@gmail.com if you have questions
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    You can stop using the app anytime (though I hope you don&apos;t!)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Questions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Privacy is important, and I want you to feel comfortable using InstaSearch. If you have any questions about how your data is handled, just email me.
                </p>
                <Button asChild>
                  <a href="mailto:kethanvr@gmail.com">
                    Contact Me
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              This policy reflects my commitment to keeping InstaSearch simple, transparent, and respectful of your privacy.
            </p>          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
