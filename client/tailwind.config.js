/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin'),
];