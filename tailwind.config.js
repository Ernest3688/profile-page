/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0278FE",
        darkBlue: "#2F4858",
        blue: "#33658A",
        skyBlue: "#86BBD8",
        darkYellow: "#F6AE2D",
        orange: "#F26419",
      },
      backgroundImage: {
        "profile-icon": "url('/src/assets/profile.png')",
        "nigeria-flag": "url('/src/assets/nigeriaFlag.png')",
        "sms-icon": "url('/src/assets/sms.svg')",
        "location-icon": "url('/src/assets/location.png')",
      },
    },
  },
  plugins: [],
};
