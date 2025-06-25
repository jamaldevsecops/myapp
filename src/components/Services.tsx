
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored frontend solutions built with modern technologies and best practices for your unique requirements.",
    color: "text-blue-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices and platforms.",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast applications optimized for speed, SEO, and user engagement with advanced caching strategies.",
    color: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Enterprise-grade security measures and robust architecture ensuring your application is always protected.",
    color: "text-green-600"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Frontend Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive frontend solutions to bring your digital vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gray-50">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
