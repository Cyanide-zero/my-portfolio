import reactPlugin from "vite-plugin-react";

export default {
  base: "/my-portfolio", // set the base path to the subdirectory of your GitHub Pages site
  jsx: "react",
  plugins: [reactPlugin],
};
