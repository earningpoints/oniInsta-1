module.exports = {
  content: [
    "./public/*.{html,js,css}",
    "./views/*.ejs",
    "./partials/*.ejs",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
};

// npx tailwind.css -i ./public/css/tailwindcss -o ./public/css/output.css --watch