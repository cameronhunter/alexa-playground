import React from 'react';

const style = {
  backgroundColor: '#efefef',
  borderStyle: 'solid',
  borderColor: '#ddd',
  borderWidth: 0,
  color: '#555',
  padding: 10
};

export default props => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/splitPanel.css" />
      <link rel="stylesheet" href="/css/codemirror.css" />
    </head>
    <body>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <header style={{ ...style, borderBottomWidth: 1 }}>
          Alexa Skill Playground
        </header>
        <main id="app" style={{ flexGrow: '1', position: 'relative' }}>
          {props.children}
        </main>
        <footer style={{ ...style, borderTopWidth: 1, textAlign: 'center' }}>
          Built using <a href="http://facebook.github.io/react/">React</a>, <a href="http://babeljs.io/">Babel</a> and <a href="http://codemirror.net/">CodeMirror</a> | <a href="https://github.com/fkling/esprima_ast_explorer">GitHub</a>
        </footer>
      </div>
      { Object.entries(props.scripts).map(([key, src]) => <script key={key} src={src}></script>) }
    </body>
  </html>
);
