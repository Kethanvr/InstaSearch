"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAISuggestion, setShowAISuggestion] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleAIGenerate = () => {
    if (searchQuery.trim()) {
      router.push(`/ai-chat?prompt=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/ai-chat");
    }
  };

  const popularSearches = [
    "Nature",
    "Architecture",
    "Travel",
    "Food",
    "Animals",
    "Technology",
    "Art",
    "People",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Discover millions of beautiful images</span>
            <span className="text-xs bg-primary/20 px-2 py-1 rounded-full">
              + AI Generation
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="gradient-text">Beautiful Images,</span>
            <br />
            <span className="text-foreground">Found & Created Instantly</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Search millions of high-quality images or create unique images with
            our advanced AI models. Perfect for your creative projects,
            websites, and presentations.
          </motion.p>

          {/* Search form */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSearch} className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search images or describe what to create..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowAISuggestion(e.target.value.length > 3);
                  }}
                  className="pl-10 h-12 text-base bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                  suppressHydrationWarning
                />

                {/* AI Suggestion Dropdown */}
                {showAISuggestion && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <button
                      type="button"
                      onClick={handleAIGenerate}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <Wand2 className="h-4 w-4 text-gray-500" />
                      Generate with AI: &quot;{searchQuery}&quot;
                    </button>
                  </div>
                )}
              </div>
            </form>

            <div className="flex gap-2">
              <Button
                type="submit"
                size="lg"
                className="h-12 px-6 gradient-bg hover:opacity-90 transition-opacity"
                onClick={handleSearch}
                suppressHydrationWarning
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-background/80 border-primary/20 hover:bg-primary/5"
                onClick={handleAIGenerate}
                suppressHydrationWarning
              >
                <Wand2 className="h-4 w-4 mr-2" />
                AI Create
              </Button>
            </div>
          </motion.div>

          {/* Popular searches */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm text-muted-foreground mr-2">Popular:</span>
            {popularSearches.map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                className="text-xs h-8 px-3 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                onClick={() => {
                  setSearchQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                }}
                suppressHydrationWarning
              >
                {term}
              </Button>
            ))}
          </motion.div>

          {/* AI Feature Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Wand2 className="h-4 w-4" />
              <span>New!</span>
              <Link
                href="/ai-chat"
                className="text-primary hover:underline font-medium"
              >
                Try our InstaSearch AI Image Generator →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary/50 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
