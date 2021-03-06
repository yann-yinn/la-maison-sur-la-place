// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "La maison sur la place",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/home/*.md",
        typeName: "ContentHome"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/page/*.md",
        typeName: "ContentPage"
      }
    }
  ]
};
