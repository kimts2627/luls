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
        "20px": "20px",
        "40px": "40px",
        "72px": "72px",
        "110px": "110px",
        "164px": "164px",
        "260px": "260px",
        "300px": "300px",
        "400px": "400px",
        "744px": "744px",
        "logoBox": "260px",
      },
      height: {
        "20px": "20px",
        "40px": "40px",
        "72px": "72px",
        "78px": "78px",
        "110px": "110px",
        "120px": "120px",
        "150px": "150px",
        "400px": "400px",
        "logoBox": "260px",
      },
      inset: {
        "72px": "72px",
        "400px": "400px",
      },
      margin: {
        "20px": "20px",
        "24px": "24px",
        "40px": "40px",
        "72px": "72px",
        "208px": "208px",
        "400px": "400px",
      },
      padding: {
        "18px": "18px",
        "20px": "20px",
        "40px": "40px",
        "80px": "80px",
        "72px": "72px",
        "208px": "208px",
        "400px": "400px",
      },
      fontSize: {
        "16px": "16px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
      },
      lineHeight: {
        "23px": "23px",
        "56px": "56px",
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
