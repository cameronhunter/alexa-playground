import React from 'react';
import Editor from './Editor';

export default props => (
  <Editor {...props} mode={{ name: 'javascript', json: true }} lineNumbers={false} />
);
