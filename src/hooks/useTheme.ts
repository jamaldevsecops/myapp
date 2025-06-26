
import { getCurrentVersionConfig } from "@/config/version";

export const useTheme = () => {
  const config = getCurrentVersionConfig();
  return {
    version: config.version,
    theme: config.theme
  };
};
