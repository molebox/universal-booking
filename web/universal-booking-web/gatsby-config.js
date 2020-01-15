module.exports = {
    siteMetadata: {
        title: '',
        description: '',
        siteUrl: ''
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Poppins',
                    `source sans pro\:300,400,400i,700`
                ]
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-theme-ui'
    ]
}