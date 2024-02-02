/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-700px)",
            opacity: "0",
          },
          "10%": {
            transform: "translateX(0px)",
            opacity: "1",
          },

          "90%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-700px)",
            opacity: "0",
          },
        },
        "fall-and-rise": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            transform: "rotateX(100deg) translateY(100px) scale(.2)",
            opacity: "0",
          },
          "70%": {
            transform: "rotateX(0deg)  ",
            opacity:'1'
          },
          // "100%": {
          //   transform: ""
          // },
        },
        "Spin-and-scale": {
          "0%": {
            transform: "rotate(0deg)", 
            scale: "1",
          },
          "4%": {
            transform: "rotate(60deg)",
            scale: "0.5",
          },
          "8%": {
            transform: "rotate(90deg)",
            scale: "1",
          },
          // wait for 4 seconds
          "25.7%": {
            transform: "rotate(90deg)",
            scale : '1'
          },
          "29.7%": {
            transform: "rotate(150deg)",
            scale: "0.5",
          }, 
          "33.7%": {
            transform: "rotate(180deg)",
            scale: "1",
          },
          // wait for 4 seconds
         "51%": 
          {
            transform: "rotate(180deg)",
            scale :'1'
            },
          "55%": {
            transform: "rotate(240deg)",
            scale: "0.5",
          },
          "59%": {
            transform: "rotate(270deg)",
            scale: "1",
          },
            // wait for 4 seconds
         "76%": 
         {
           transform: "rotate(270deg)",
           scale :'1'
           },
          "80%": {
            transform: "rotate(330deg)",
            scale: "0.5",
          },
          "84%": {
            transform: "rotate(360deg)",
            scale: "1",
          },
          "100%": {
            transform: "rotate(360deg)",
            scale : '1'
          }
          // wait for 4 seconds
          
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 5s ease-in-out infinite 3s",
        "fall-and-rise": "fall-and-rise 5s ease-in-out infinite ",
        "Spin-and-scale": "Spin-and-scale 16s ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
