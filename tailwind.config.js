import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */

export default {
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    // Add custom fluid screens and font sizes
    // TIP: To customize screens, use this instead (@see https://fluid.tw/#limitations)
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    // fluid: ({ theme }) => ({
    //   defaultScreens: ['20rem', theme('screens.lg')]
    // }),

    screens,
    fontSize,
  },
  plugins: [fluid],
}
