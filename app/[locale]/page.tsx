import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
