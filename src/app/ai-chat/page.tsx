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
  };

  return (
    <div className="h-screen bg-gradient-to-br from-background via-background to-muted/20 flex flex-col overflow-hidden">
      {/* Header Bar */}
      <div className="flex-shrink-0 border-b border-border/20 bg-background/80 backdrop-blur-xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <Wand2 className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    InstaSearch AI Studio
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Create stunning images with AI
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 mb-6">
                  <Sparkles className="h-10 w-10 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Welcome to InstaSearch AI Studio
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Describe any image you can imagine, and our advanced AI will
                  create it for you in seconds.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    "A serene mountain landscape at sunset with purple skies",
                    "A futuristic cyberpunk cityscape with neon lights",
                    "A cute cartoon cat wearing a wizard hat in a magical forest",
                    "An abstract painting with vibrant colors and geometric shapes",
                  ].map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      onClick={() => setInputValue(example)}
                      className="text-left justify-start h-auto p-4 border-purple-200/50 hover:border-purple-300 hover:bg-purple-50/50 dark:hover:bg-purple-950/20"
                    >
                      <div className="text-sm">
                        <div className="font-medium mb-1">Try this prompt:</div>
                        <div className="text-muted-foreground">
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
                  className={`flex gap-4 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.type === "assistant" && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-purple-500" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] ${
                      message.type === "user" ? "order-2" : ""
                    }`}
                  >
                    <Card
                      className={`border-0 shadow-lg ${
                        message.type === "user"
                          ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                          : "bg-white dark:bg-card border border-border/50"
                      }`}
                    >
                      <CardContent className="p-6">
                        <p className="text-base leading-relaxed mb-3">
                          {message.content}
                        </p>

                        {message.image && (
                          <div className="mt-4">
                            <div className="relative group rounded-xl overflow-hidden">
                              <img
                                src={message.image}
                                alt="Generated image"
                                className="w-full max-w-lg rounded-xl border border-border/20 shadow-lg"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-xl flex items-center justify-center gap-3">
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => downloadImage(message.image!)}
                                  className="bg-white/95 text-black hover:bg-white shadow-lg"
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => copyPrompt(message.content)}
                                  className="bg-white/95 text-black hover:bg-white shadow-lg"
                                >
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy Prompt
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2 mt-4 text-xs opacity-70">
                          <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                          <span>{message.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {message.type === "user" && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center flex-shrink-0 order-3">
                      <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Show loading indicator for the current message */}
            {isLoading &&
              messages[messages.length - 1]?.content ===
                "Creating your image with InstaSearch AI..." && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-4 max-w-[75%]">
                    <Card className="border-0 shadow-lg bg-white dark:bg-card border border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 border-4 border-purple-200 dark:border-purple-800 rounded-full animate-spin">
                              <div className="absolute top-0 left-0 w-8 h-8 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
                            </div>
                          </div>
                          <div>
                            <div className="text-base font-medium text-purple-600 dark:text-purple-400">
                              Generating your masterpiece...
                            </div>
                            <div className="text-sm text-muted-foreground">
                              This usually takes 3-8 seconds
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

        {/* Input Section */}
        <div className="flex-shrink-0 border-t border-border/20 bg-background/80 backdrop-blur-xl">
          <div className="px-6 py-6">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                  <Input
                    placeholder="Describe the image you want to create... (e.g., 'A magical forest with glowing mushrooms')"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="h-14 text-base pl-6 pr-16 bg-white dark:bg-card border-border/50 focus:border-purple-300 dark:focus:border-purple-600 shadow-lg rounded-xl"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="absolute right-2 top-2 h-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </form>
              <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground">
                <span>
                  Powered by InstaSearch AI • High-quality image generation
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
        <div className="h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 mb-4">
              <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            </div>
            <p className="text-muted-foreground">
              Loading InstaSearch AI Studio...
            </p>
          </div>
        </div>
      }
    >
      <AIChatContent />
    </Suspense>
  );
}
