import { Mail, Github, Linkedin, Youtube, Twitter, Brain, Code, Palette, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
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
          {/* About Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Brain className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">🧠 About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to InstaSearch – where innovation meets purpose.
            </p>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Main About Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  The Story Behind InstaSearch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Built by <strong>Kethan VR</strong>, a passionate software developer and tech enthusiast, this platform is a reflection of creativity, learning, and a constant drive to solve real-world problems using technology. Whether it's an AI-powered tool, a responsive web app, or an educational resource, everything here is designed with precision, simplicity, and the end-user in mind.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a developer who believes in building things that matter. With a background in web development, UI/UX design, and AI integration, I focus on crafting powerful digital solutions that are accessible, functional, and future-ready.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This site is not just a showcase of my projects – it's a step towards creating meaningful impact through tech. Whether you're a fellow dev, a startup, or just curious about what I do, feel free to explore, connect, and collaborate!
                </p>
                <div className="flex items-center gap-2 text-lg font-medium text-primary">
                  Let's build the future together ✨
                </div>
              </CardContent>
            </Card>

            {/* Skills & Focus Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  What I Do
                </CardTitle>
                <CardDescription>
                  The technologies and areas I'm passionate about
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Palette className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">Frontend Development</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• React & Next.js applications</li>
                      <li>• TypeScript development</li>
                      <li>• Modern CSS & Tailwind</li>
                      <li>• Responsive design</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">UI/UX Design</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• User-centered design</li>
                      <li>• Modern interfaces</li>
                      <li>• Accessibility focus</li>
                      <li>• Design systems</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Brain className="h-5 w-5 text-purple-500" />
                      <span className="font-medium">AI Integration</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• AI-powered features</li>
                      <li>• Machine learning tools</li>
                      <li>• Smart automation</li>
                      <li>• Data-driven solutions</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Full-Stack Development</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-8">
                      <li>• End-to-end solutions</li>
                      <li>• API development</li>
                      <li>• Database design</li>
                      <li>• Cloud deployment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  📬 Contact
                </CardTitle>
                <CardDescription>
                  Got a question, collaboration idea, or just wanna say hey? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-950/20 rounded-lg">
                      <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:kethanvr@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        kethanvr@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/Kethanvr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/Kethanvr
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-950/20 rounded-lg">
                      <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/kethan-vr-433ab532b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/kethan-vr-433ab532b
                      </a>
                    </div>
                  </div>

                  {/* YouTube */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-950/20 rounded-lg">
                      <Youtube className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="font-medium">YouTube</p>
                      <a 
                        href="https://youtube.com/@kethanvr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @kethanvr
                      </a>
                    </div>
                  </div>

                  {/* Threads */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-950/20 rounded-lg">
                      <div className="h-5 w-5 text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center justify-center">
                        🧵
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Threads</p>
                      <a 
                        href="https://threads.net/@kethan_vr_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @kethan_vr_
                      </a>
                    </div>
                  </div>

                  {/* Twitter/X */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-950/20 rounded-lg">
                      <Twitter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">X (Twitter)</p>
                      <a 
                        href="https://twitter.com/VrKethan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @VrKethan
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t">
                  <Button asChild>
                    <a href="mailto:kethanvr@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://github.com/Kethanvr" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://linkedin.com/in/kethan-vr-433ab532b" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Philosophy */}
            <Card>
              <CardHeader>
                <CardTitle>Why I Built InstaSearch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  InstaSearch came from a simple frustration: existing stock photo sites were clunky, slow, and overcomplicated. I wanted something clean, fast, and focused on what actually matters - finding great images quickly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This project represents my approach to development: start with a real problem, build the simplest solution that works, and focus on user experience above all else. No unnecessary features, no complicated interfaces - just a tool that does one thing really well.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Heart className="h-4 w-4" />
                  Building tools that people actually want to use
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/10 to-purple/10 rounded-lg border">
            <p className="text-muted-foreground">
              Thanks for checking out InstaSearch! Whether you're here to use the tool, explore the code, or just say hi - I appreciate you being here. 
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Let's create something amazing together! 🚀
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
