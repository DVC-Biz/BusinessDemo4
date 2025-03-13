import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Testimonials() {
  const t = await getTranslations("testimonials");
  const testimonials = [
    {
      quote: t("items.0.quote"),
      author: t("items.0.author"),
      role: t("items.0.role"),
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("items.1.quote"),
      author: t("items.1.author"),
      role: t("items.1.role"),
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("items.2.quote"),
      author: t("items.2.author"),
      role: t("items.2.role"),
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-muted">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary opacity-50" />
              </CardHeader>
              <CardContent>
                <p className="text-lg">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
