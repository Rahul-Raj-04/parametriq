module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [
    "./src/Components/Pagecontent/Pagetopcontent.jsx",
    "src/Components/Pagecontent/Card.jsx",
    "src/Components/Pagecontent/Card.jsx",
    "src/Components/Pagecontent/Card2.jsx",
    "src/Components/Threepageinone.jsx",
    "src/Components/Footercallus.jsx",
    "src/Components/Videodoor.jsx",
    "src/Components/Videodoorcard.jsx",
    "src/Components/FTTH.jsx",
    "src/Components/CaseStudy.jsx",
    "src/Components/OurServices.jsx",
    "src/Components/Herosection.jsx",
    "src/Components/Footer.jsx",
    "src/Components/About.jsx",
    "src/Components/Blog.jsx",
    "src/Components/Crausal.jsx",
    "src/Components/HomeAbout.jsx",
    "src/Components/Eroor.jsx",
    "src/Components/Thankyou.jsx",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/path/to/your/image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
