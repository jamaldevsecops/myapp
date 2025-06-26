
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "Clean React Code",
  "Modern Design",
  "Fast Loading",
  "Mobile Friendly"
];

export const Features = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-white border-blue-200">
              <CardContent className="p-6">
                <p className="text-blue-700 font-medium">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
