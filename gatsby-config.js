module.exports = {
    // ...
    plugins: [
      // ...
      {
        resolve: '@slixites/gatsby-plugin-google-fonts',
        options: {
          fonts: [
            'Montserrat',
            'source sans pro\:300,400,400i,700',
          ],
          display: 'swap',
          preconnect: true,
          attributes: {
              rel: 'stylesheet preload prefetch',
              as: 'style',
          },
        },
      },
      // ...
    ]
    // ...
  }