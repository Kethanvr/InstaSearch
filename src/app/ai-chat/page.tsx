"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  Send,
  Download,
  Copy,
  Wand2,
  User,
  Bot,
  ArrowLeft,
  Sparkles,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  image?: string;
  timestamp: Date;
}

function AIChatContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const initialPrompt = searchParams.get("prompt");
    if (initialPrompt) {
      setInputValue(initialPrompt);
    }
  }, [searchParams]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateImage = async (prompt: string) => {
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: prompt,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Add loading message
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: "Creating your image with InstaSearch AI...",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      if (data.success && data.images && data.images.length > 0) {
        // Remove loading message and add success message
        setMessages((prev) => prev.slice(0, -1));

        const assistantMessage: Message = {
          id: (Date.now() + 2).toString(),
          type: "assistant",
          content: `I've created an image based on your prompt: "${prompt}"`,
          image: data.images[0],
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("No images were generated");
      }
    } catch (err) {
      // Remove loading message and add error message
      setMessages((prev) => prev.slice(0, -1));

      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: "assistant",
        content: `Sorry, I couldn't generate an image: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      generateImage(inputValue.trim());
    }
  };

  const downloadImage = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `ai-generated-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
  };  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex flex-col">
      {/* Floating elements - matching home page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-primary/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 bg-primary/5 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex flex-col pt-16">
        {/* Messages area - scrollable */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                  Welcome to <span className="gradient-text">InstaSearch AI Studio</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Describe any image you can imagine, and our advanced AI will
                  create it for you in seconds.
                </p>
                
                {/* Example prompts grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {[
                    "A serene mountain landscape at sunset",
                    "A futuristic cityscape with neon lights",
                    "A cute cat wearing a wizard hat",
                    "An abstract painting with geometric shapes",
                  ].map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue(example)}
                      className="text-left justify-start h-auto p-4 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="text-xs">
                        <div className="font-medium mb-1 text-foreground">Try this prompt:</div>
                        <div className="text-muted-foreground text-left leading-relaxed">
                          &quot;{example}&quot;
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex gap-3 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] ${
                      message.type === "user" ? "order-2" : ""
                    }`}
                  >
                    <Card
                      className={`border-0 shadow-md transition-all duration-200 ${
                        message.type === "user"
                          ? "gradient-bg text-primary-foreground"
                          : "bg-background/80 backdrop-blur-sm border border-border/50 hover:shadow-lg"
                      }`}
                    >
                      <CardContent className="p-4">
                        <p className="text-sm leading-relaxed mb-3">
                          {message.content}
                        </p>

                        {message.image && (
                          <div className="mt-4">
                            <div className="relative group rounded-lg overflow-hidden">
                              <img
                                src={message.image}
                                alt="Generated image"
                                className="w-full max-w-md rounded-lg border border-border/20 shadow-lg transition-transform duration-200 group-hover:scale-[1.02]"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center gap-3">
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => downloadImage(message.image!)}
                                  className="bg-background/95 text-foreground hover:bg-background shadow-lg backdrop-blur-sm text-xs"
                                >
                                  <Download className="h-3 w-3 mr-2" />
                                  Download
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => copyPrompt(message.content)}
                                  className="bg-background/95 text-foreground hover:bg-background shadow-lg backdrop-blur-sm text-xs"
                                >
                                  <Copy className="h-3 w-3 mr-2" />
                                  Copy
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2 mt-3 text-xs opacity-70">
                          <div className="w-1 h-1 bg-current rounded-full"></div>
                          <span>{message.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {message.type === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0 order-3">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Enhanced loading indicator */}
            {isLoading &&
              messages[messages.length - 1]?.content ===
                "Creating your image with InstaSearch AI..." && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-3 max-w-[85%] sm:max-w-[75%]">
                    <Card className="border-0 shadow-md bg-background/80 backdrop-blur-sm border border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-6 h-6 border-2 border-primary/20 rounded-full animate-spin">
                              <div className="absolute top-0 left-0 w-6 h-6 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary">
                              Generating your image...
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Usually takes 3-8 seconds
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Section - Fixed at bottom */}
        <div className="relative z-10 border-t border-border/20 bg-background/95 backdrop-blur-xl">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Describe the image you want to create..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="h-12 text-sm pl-10 pr-16 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 shadow-lg rounded-lg transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="absolute right-1.5 top-1.5 h-9 px-4 gradient-bg hover:opacity-90 text-primary-foreground rounded-md transition-all duration-200 text-sm"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-1" />
                        Generate
                      </>
                    )}
                  </Button>
                </div>
              </form>
              <div className="flex items-center justify-center mt-3 text-xs text-muted-foreground">
                <Wand2 className="h-3 w-3 mr-1" />
                <span>
                  Powered by InstaSearch AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIChatPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">
              Loading AI Studio
            </h3>
            <p className="text-sm text-muted-foreground">
              Preparing your workspace...
            </p>
          </div>
        </div>
      }
    >
      <AIChatContent />
    </Suspense>
  );
}
