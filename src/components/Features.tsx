
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/useTheme";

const features = [
  "Automated Testing",
  "Monitoring & Alerts",
  "Scalable Infrastructure",
  "Security Scanning"
];

export const Features = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-16 ${theme.background}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold ${theme.text} text-center mb-12`}>
          Platform Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-white border-gray-200">
              <CardContent className="p-6">
                <p className={`${theme.textSecondary} font-medium`}>{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
