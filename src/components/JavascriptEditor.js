import React from 'react';
import Editor from './Editor';

export default props => {
  return <Editor {...props} mode={{ name: 'javascript' }} />;
}
