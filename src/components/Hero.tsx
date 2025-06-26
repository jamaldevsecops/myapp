
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-700">
          Version 1.1
        </Badge>
        
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          MyApp Frontend Service
        </h1>
        
        <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
          Simple, clean, and powerful frontend solutions built with ReactJS
        </p>
        
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};
