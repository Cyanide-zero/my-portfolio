// @ts-check
import reactPlugin from "vite-plugin-react";

/**
 * @type { import('vite').UserConfig }
 */

export default {
  base: "/my-portfolio/", // set the base path to the subdirectory of your GitHub Pages site
  jsx: "react",
  plugins: [reactPlugin],
};
