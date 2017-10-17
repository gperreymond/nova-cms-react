/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import Reflux from 'reflux'

class Layout extends Reflux.Component {
  render () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href={'themes/' + this.props.theme + '/assets/css/github-markdown.min.css'} />
          <title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout