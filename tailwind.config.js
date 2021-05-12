module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "screen-1440": "1440px",
        "screen-1120": "1120px",
      },
      width: {
        "40px": "40px",
        "72px": "72px",
        "110px": "110px",
        "400px": "400px",
        "logoBox": "260px",
      },
      height: {
        "40px": "40px",
        "72px": "72px",
        "110px": "110px",
        "400px": "400px",
        "logoBox": "260px",
      },
      inset: {
        "72px": "72px",
        "400px": "400px",
      },
      margin: {
        "20px": "18px",
        "40px": "40px",
        "72px": "72px",
        "208px": "208px",
        "400px": "400px",
      },
      padding: {
        "20px": "20px",
        "40px": "40px",
        "72px": "72px",
        "208px": "208px",
        "400px": "400px",
      },
      fontSize: {
        "20px": "20px",
        "40px": "40px",
      },
      borderRadius: {
        standard: "8px",
      },
      screens: {
        1440: "1440px",
        1120: "1120px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
