
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { version, theme } = useTheme();
  
  // Define header background colors based on version (same as footer)
  const getHeaderBg = (version: string) => {
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
    <header className={`${getHeaderBg(version)} border-b border-gray-200`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="w-full h-4"></div>
        </div>
      </div>
    </header>
  );
};
