
import { useTheme } from "@/hooks/useTheme";

export const Footer = () => {
  const { version, theme } = useTheme();
  
  return (
    <footer className={`${theme.text} text-white py-8`} style={{ backgroundColor: `var(--tw-${theme.primary.split('-')[1]}-900)` }}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-6 h-6 bg-white rounded"></div>
          <span className="text-lg font-bold">DevOps Platform {version}</span>
        </div>
        <p className="opacity-80">
          © 2024 DevOps Platform. Streamlining development workflows.
        </p>
      </div>
    </footer>
  );
};
