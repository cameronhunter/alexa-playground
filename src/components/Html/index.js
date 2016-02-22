import React from 'react';

export default props => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      { Object.entries(props.styles).map(([key, href]) => <link key={key} rel="stylesheet" href={href} />) }
    </head>
    <body>
      { props.children }
      { Object.entries(props.scripts).map(([key, src]) => <script key={key} src={src}></script>) }
    </body>
  </html>
);
