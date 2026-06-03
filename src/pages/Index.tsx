import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DepartmentCards from "@/components/DepartmentCards";
import PromiseSection from "@/components/PromiseSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DepartmentCards />
      <PromiseSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
