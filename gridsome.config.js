// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'londoneast',
  plugins : [
    {
      use    : '@gridsome/source-filesystem',
      options: {
        path    : 'works**/*.md',
        typeName: 'Work',
        }
      },
      {
        use    : '@gridsome/plugin-google-analytics',
        options: {
          id: 'UA-84231316-2'
        }
      }
    ]
  };

