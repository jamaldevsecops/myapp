
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Zap, Shield, Code, Smartphone } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global CDN",
    description: "Lightning-fast content delivery worldwide"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Interfaces designed with your users in mind"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Live data synchronization and instant updates"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security for your applications"
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, scalable, and well-documented"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design for all screen sizes"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">
            ⚡ Powerful Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Frontend Service?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with the latest technologies and industry best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
