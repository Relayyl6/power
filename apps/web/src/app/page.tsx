import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import OurValues from "@/components/home/OurValues";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BentoGrid from "@/components/home/BentoGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Hero />
      <ServicesGrid />
      <OurValues />
      <WhyChooseUs />
      <BentoGrid />
    </div>
  );
}
