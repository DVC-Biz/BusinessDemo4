"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Quantum has transformed the way we operate. The platform's intuitive design and powerful features have helped us streamline our processes and grow our business exponentially.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "The team at Quantum truly understands our industry and has provided invaluable guidance as we've scaled our operations globally. Their platform is a game-changer.",
      author: "Michael Chen",
      role: "COO, Global Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "I've worked with many service providers over the years, but none have delivered the level of results and ROI that Quantum has. Their platform is exceptional.",
      author: "Jessica Williams",
      role: "Marketing Director, Retail Giant",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "Implementing Quantum's solution has been the best decision we've made this year. Our productivity has increased by 40% and our customer satisfaction scores are at an all-time high.",
      author: "David Rodriguez",
      role: "CTO, Innovation Labs",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useMobile();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoplay) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="w-full py-20 md:py-28 lg:py-36 overflow-hidden relative"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[30%] h-[30%] rounded-full bg-violet-500/5 blur-[100px]"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2 rounded-full bg-primary"></span>
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What our clients say
          </h2>

          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="relative mt-10 max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="relative h-[400px] md:h-[300px]">
              <AnimatePresence mode="wait">
                {testimonials.map(
                  (testimonial, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 shadow-lg p-8 md:p-10">
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <Quote className="h-12 w-12 text-primary/20 mb-6" />
                              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                "{testimonial.quote}"
                              </p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                                  <Image
                                    src={
                                      testimonial.avatar || "/placeholder.svg"
                                    }
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold">
                                    {testimonial.author}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {testimonial.role}
                                  </p>
                                </div>
                              </div>
                              <Image
                                src={testimonial.company || "/placeholder.svg"}
                                alt="Company logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto opacity-80"
                              />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:text-primary hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:text-primary hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
