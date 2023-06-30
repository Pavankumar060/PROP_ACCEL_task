import("tailwindcss").Config;
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  extend: {
    colors: {
      dual_color:
        "--tw-gradient-from:rgba(142 84 233/ 1)  var(--tw-gradient-from-position);--tw-gradient-to:  rgba(71  118  230 /1) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
      color_1: "rgba(122, 49, 153, 1)",
      color_2: "rgba(122, 49, 153, .3)",
      background: "rgba(53,26,82,1)",
      conic_color:
        " conic-gradient(rgba(53,26,82,1) 0deg, rgba(53,26,82,1) 45deg,white 45deg, white 225deg,rgba(53,26,82,1)225deg, rgba(53,26,82,1)360deg);",
    },
  },
};
export const plugins = [];
