
import { useTheme } from "@/hooks/useTheme";

export const Footer = () => {
  const { version, theme } = useTheme();
  
  // Define footer background colors based on version (same as header)
  const getFooterBg = (version: string) => {
    switch (version) {
      case 'v1.1':
        return 'bg-blue-900';
      case 'v1.2':
        return 'bg-green-900';
      case 'v1.3':
        return 'bg-yellow-900';
      case 'latest':
        return 'bg-gray-900';
      default:
        return 'bg-gray-900';
    }
  };
  
  return (
    <footer className={`${getFooterBg(version)} text-white py-8`}>
      <div className="container mx-auto px-6 text-center">
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
