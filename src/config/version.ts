
export interface VersionConfig {
  version: string;
  theme: {
    primary: string;
    primaryHover: string;
    secondary: string;
    background: string;
    text: string;
    textSecondary: string;
  };
}

const versionConfigs: Record<string, VersionConfig> = {
  "v1.1": {
    version: "v1.1",
    theme: {
      primary: "bg-blue-600",
      primaryHover: "hover:bg-blue-700",
      secondary: "bg-blue-50",
      background: "bg-blue-50",
      text: "text-blue-900",
      textSecondary: "text-blue-700",
    }
  },
  "v1.2": {
    version: "v1.2",
    theme: {
      primary: "bg-green-600",
      primaryHover: "hover:bg-green-700",
      secondary: "bg-green-50",
      background: "bg-green-50",
      text: "text-green-900",
      textSecondary: "text-green-700",
    }
  },
  "latest": {
    version: "latest",
    theme: {
      primary: "bg-yellow-600",
      primaryHover: "hover:bg-yellow-700",
      secondary: "bg-yellow-50",
      background: "bg-yellow-50",
      text: "text-yellow-900",
      textSecondary: "text-yellow-700",
    }
  }
};

// Change this to switch versions globally
export const CURRENT_VERSION = "v1.1";

export const getCurrentVersionConfig = (): VersionConfig => {
  return versionConfigs[CURRENT_VERSION] || versionConfigs["v1.1"];
};
