module.exports = {
  pathPrefix: 'drum-machine',
  siteMetadata: {
    title: 'Drum Machine',
    author: 'Sean Campbell',
    siteUrl: 'https://natac13.github.io/drum-machine/',
    siteRepo: 'https://github.com/natac13/drum-machine',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/sounds',
      },
    },
  ],
}
