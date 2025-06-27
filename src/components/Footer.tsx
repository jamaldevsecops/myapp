
import { useTheme } from "@/hooks/useTheme";

export const Footer = () => {
  const { version, theme } = useTheme();
  
  return (
    <footer className={`${theme.text} text-white py-8`} style={{ backgroundColor: `var(--tw-${theme.primary.split('-')[1]}-900)` }}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-6 h-6 bg-white rounded"></div>
          <span className="text-lg font-bold">Platform {version}</span>
        </div>
        <p className="opacity-80 mb-2">
          © 2024 All rights reserved by Jamal Hossain
        </p>
        <p className="opacity-80">
          <a 
            href="https://www.linkedin.com/in/jh1337cse/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn: https://www.linkedin.com/in/jh1337cse/
          </a>
        </p>
      </div>
    </footer>
  );
};
