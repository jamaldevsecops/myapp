
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white border-b border-blue-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold text-blue-900">MyApp v1.1</span>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
