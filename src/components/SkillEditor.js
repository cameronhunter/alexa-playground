import React from 'react';
import Try from 'promise-try';
import Editor from './Editor';
import Titled from './Titled';

Try(() => require('codemirror/mode/javascript/javascript'));

export default props => (
  <Titled title='Skill'>
    <Editor {...props} mode={{ name: 'javascript' }} />
  </Titled>
);
