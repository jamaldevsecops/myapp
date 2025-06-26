
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/hooks/useTheme";

const services = [
  {
    title: "CI/CD Pipeline",
    description: "Automated continuous integration and deployment workflows"
  },
  {
    title: "Container Orchestration",
    description: "Docker and Kubernetes management made simple"
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform and CloudFormation templates"
  }
];

export const Services = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold ${theme.text} text-center mb-12`}>
          DevOps Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className={theme.textSecondary}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={theme.textSecondary}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
