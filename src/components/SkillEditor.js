import React from 'react';
import Editor from './Editor';
import Try from 'promise-try';

Try(() => require('codemirror/mode/javascript/javascript'));

export default props => (
  <Editor {...props} mode={{ name: 'javascript' }} />
);
