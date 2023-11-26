import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          accent: "#f75454",
          main: "#161619",
          white: "#fff",
          dark:"#0A0B0D"
      },
      fontFamily:{
        "poppins": ['"Poppins"']
      },
      backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  },
  },
  plugins: [],
}
export default config
// background-image: radial-gradient( circle farthest-corner at 14.2% 24%,  rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%, rgba(239,61,78,0.63) 84.6% );