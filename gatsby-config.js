module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
  ],
};
