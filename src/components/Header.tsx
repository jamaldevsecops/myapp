
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { version, theme } = useTheme();
  
  // Define version colors
  const getVersionColor = (version: string) => {
    switch (version) {
      case 'v1.1':
        return 'bg-blue-500';
      case 'v1.2':
        return 'bg-green-500';
      case 'v1.3':
        return 'bg-yellow-500';
      case 'latest':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <header className={`${getVersionColor(version)} border-b border-gray-200`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-white">{version}</span>
        </div>
      </div>
    </header>
  );
};
