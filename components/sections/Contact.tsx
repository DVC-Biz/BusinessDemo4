"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the form data to your API
      console.log("Form submitted:", formData);

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(t("errorMessage"));
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
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
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("formTitle")}</CardTitle>
              <CardDescription>{t("formSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-12">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("successTitle")}</h3>
                  <p className="text-center text-muted-foreground">
                    {t("successMessage")}
                  </p>
                  <Button onClick={() => setIsSuccess(false)}>
                    {t("sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">{t("nameLabel")}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">{t("emailLabel")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">{t("subjectLabel")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t("subjectPlaceholder")}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">{t("messageLabel")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("messagePlaceholder")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {error && (
                    <div className="rounded-md bg-destructive/10 p-3 text-destructive">
                      {error}
                    </div>
                  )}
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t("submitting") : t("submit")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("contactInfoTitle")}</CardTitle>
              <CardDescription>{t("contactInfoSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">{t("addressTitle")}</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">{t("emailTitle")}</h3>
                  <p className="text-sm text-muted-foreground">
                    info@businesspro.com
                    <br />
                    support@businesspro.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">{t("phoneTitle")}</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
