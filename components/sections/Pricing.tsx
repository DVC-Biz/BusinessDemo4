import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Pricing() {
  const t = await getTranslations("pricing");
  const plans = [
    {
      name: t("plans.0.name"),
      description: t("plans.0.description"),
      price: t("plans.0.price"),
      feature1: t("plans.0.feature1"),
      feature2: t("plans.0.feature2"),
      feature3: t("plans.0.feature3"),
      feature4: t("plans.0.feature4"),
      cta: t("plans.0.cta"),
      popular: false,
    },
    {
      name: t("plans.1.name"),
      description: t("plans.1.description"),
      price: t("plans.1.price"),
      feature1: t("plans.1.feature1"),
      feature2: t("plans.1.feature2"),
      feature3: t("plans.1.feature3"),
      feature4: t("plans.1.feature4"),
      feature5: t("plans.1.feature5"),
      cta: t("plans.1.cta"),
      popular: true,
    },
    {
      name: t("plans.2.name"),
      description: t("plans.2.description"),
      price: t("plans.2.price"),
      feature1: t("plans.2.feature1"),
      feature2: t("plans.2.feature2"),
      feature3: t("plans.2.feature3"),
      feature4: t("plans.2.feature4"),
      feature5: t("plans.2.feature5"),
      feature6: t("plans.2.feature6"),
      cta: t("plans.2.cta"),
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
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
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col justify-between ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-2 border-muted"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {t("popularLabel")}
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">
                    / {t("monthly")}
                  </span>
                </div>
                <ul className="grid gap-2">
                  {Object.keys(plan)
                    .filter((key) => key.startsWith("feature"))
                    .map((key, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        <span>{plan[key]}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
