
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { version, theme } = useTheme();
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${theme.primary} rounded`}></div>
            <span className={`text-xl font-bold ${theme.text}`}>DevOps Platform {version}</span>
          </div>
          
          <Button className={`${theme.primary} ${theme.primaryHover} text-white`}>
            Deploy
          </Button>
        </div>
      </div>
    </header>
  );
};
