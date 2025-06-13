"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ClientWrapper } from "@/components/client-wrapper";

interface GeneratedImage {
  url: string;
  prompt: string;
  id: string;
}

export function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

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
      }      if (data.success && data.images && data.images.length > 0) {
        const newImages = data.images.map((imageUrl: string, index: number) => ({
          url: imageUrl,
          prompt,
          id: `${Date.now()}-${index}`,
        }));
        setGeneratedImages((prev) => [...newImages, ...prev]);
        setPrompt("");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateImage();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Wand2 className="h-5 w-5 text-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Powered by InstaSearch AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Create with AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into stunning images with our advanced
            artificial intelligence
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-3">                <div className="relative flex-1">
                  <Input
                    placeholder="Describe your image... (e.g., 'A peaceful sunset over mountains')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    suppressHydrationWarning={true}
                    autoComplete="off"
                    data-form-type="other"
                    className="h-12 text-base bg-background/80 border-border/50 focus:border-foreground/20"
                  />
                </div>
                <Button
                  onClick={generateImage}
                  disabled={isLoading || !prompt.trim()}
                  className="h-12 px-6 bg-foreground text-background hover:bg-foreground/90"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-red-600 text-sm p-3 bg-red-50 dark:bg-red-950/20 rounded-md border border-red-200 dark:border-red-800"
                >
                  {error}
                </motion.div>
              )}

              <div className="mt-4 text-center">
                <Link
                  href="/ai-chat"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Want more features? Try our full AI chat experience →
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Generated Images Preview */}
        <AnimatePresence>
          {generatedImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >              {generatedImages.slice(0, 2).map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden border border-border/50 hover:border-border transition-colors">
                    <div className="aspect-video relative">                      <Image
                        src={image.url}
                        alt={image.prompt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        &quot;{image.prompt}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show more link */}
        {generatedImages.length > 2 && (
          <div className="text-center">
            <Link
              href="/ai-chat"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all {generatedImages.length} generated images →
            </Link>
          </div>
        )}

        {/* Empty State */}
        {generatedImages.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-muted-foreground"
          >
            <Wand2 className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-base">Ready to create something amazing?</p>
            <p className="text-sm">
              Enter a description above to generate your first AI image
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
