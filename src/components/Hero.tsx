
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/useTheme";

export const Hero = () => {
  const { version, theme } = useTheme();
  
  return (
    <section className={`py-20 ${theme.background}`}>
      <div className="container mx-auto px-6 text-center">
        <Badge className={`mb-6 ${theme.primary} text-white ${theme.primaryHover}`}>
          Version {version}
        </Badge>
        
        <h1 className={`text-5xl font-bold ${theme.text} mb-6`}>
          DevOps Platform
        </h1>
        
        <p className={`text-xl ${theme.textSecondary} mb-8 max-w-2xl mx-auto`}>
          Streamline your development and operations with our comprehensive DevOps toolkit
        </p>
        
        <Button className={`${theme.primary} ${theme.primaryHover} text-white px-8 py-3 text-lg`}>
          Start Pipeline
        </Button>
      </div>
    </section>
  );
};
