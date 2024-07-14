/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1880px",
      "4xl": "2520px",
    },
    colors: {
      "text-primary": "#DDDDDD",
      "text-secondary": "#AAAAAA",
      "text-accent": "#FFFFFF",
      "text-extra-0": "#777777",
      "text-extra-1": "#1D1D23",
      "text-extra-2": "#E0E0E0",
      "background-0": "#000000",
      white: "#fff",
      red: "#f00",
      placeholder: "#222222",
      "contact-check": "#ffffff33",
    },
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "background-1": "linear-gradient(33deg, #000 43.39%, #292929 101.89%)",
        "background-2": "linear-gradient(16deg, #000 35.3%, #292929 107.32%);",
        "text-gradient-2": "linear-gradient(91deg, #AAA 8.81%, #6F6F6F 99.51%)",
        "bg-gradient": "linear-gradient(180deg, #111 0%, #000 100%)",
        "bg-gradient-footer":
          "linear-gradient(180deg, #000 35.3%, #292929 107.32%)",
        "bg-gradient-cases":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0F0F14 31%)",
        //Landing Page
        pill: "linear-gradient(180deg, #111 0%, #000 100%)",
        contact: "linear-gradient(180deg, #000 0%, #242424 100%)",
        "hero-image": "url(/assets/images/hero.jpg)",
        "hokup-image": "url(/assets/images/hokup.jpg)",
        testimonial: "linear-gradient(180deg, #131313 0%, #343434 100%)",
      },
    },
  },
  plugins: [],
};
