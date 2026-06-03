import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const departmentInfo: Record<string, { title: string; description: string }> = {
  marketing: {
    title: "Marketing",
    description: "AI workers that drive organic growth, manage campaigns and optimize every channel.",
  },
  sales: {
    title: "Sales",
    description: "AI workers that qualify leads, automate outreach and accelerate your pipeline.",
  },
  finance: {
    title: "Finance",
    description: "AI workers that process invoices, forecast revenue and ensure compliance.",
  },
};

const DepartmentPage = () => {
  const { department } = useParams<{ department: string }>();
  const info = department ? departmentInfo[department] : null;

  if (!info) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          {info.title}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          {info.description}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentPage;
