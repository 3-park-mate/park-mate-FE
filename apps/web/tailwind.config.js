/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('../../packages/ui/tailwind.config.js')],
  safelist: [
    'bg-spharos-primary', 'bg-spharos-green', 'bg-spharos-green-light', 'bg-spharos-green-14', 'bg-spharos-green-42', 'bg-spharos-green-dark', 'bg-spharos-blue-black', 'bg-spharos-blue-black-light', 'bg-spharos-gray', 'bg-spharos-gray-light', 'bg-spharos-gray-dark', 'bg-spharos-white', 'bg-spharos-black',
    'text-spharos-primary', 'text-spharos-green', 'text-spharos-green-light', 'text-spharos-green-14', 'text-spharos-green-42', 'text-spharos-green-dark', 'text-spharos-blue-black', 'text-spharos-blue-black-light', 'text-spharos-gray', 'text-spharos-gray-light', 'text-spharos-gray-dark', 'text-spharos-white', 'text-spharos-black',
  ],
}; 