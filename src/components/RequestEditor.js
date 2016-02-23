import React from 'react';
import Try from 'promise-try';
import Editor from './Editor';
import Titled from './Titled';

Try(() => require('codemirror/mode/javascript/javascript'));

export default props => (
  <Titled title='Request'>
    <Editor {...props} mode={{ name: 'javascript', json: true }} lineNumbers={false} />
  </Titled>
);
