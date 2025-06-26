
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "React Development",
    description: "Modern React applications with clean code"
  },
  {
    title: "UI/UX Design",
    description: "Simple and beautiful user interfaces"
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and efficiency"
  }
];

export const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
