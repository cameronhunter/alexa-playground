import React from 'react';

export default props => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/codemirror.css" />
      <link rel="stylesheet" href="/css/editor.css" />
    </head>
    <body>
      <main id="app">{props.children}</main>
      { Object.entries(props.scripts).map(([key, src]) => <script key={key} src={src}></script>) }
    </body>
  </html>
);
