import React from 'react';
import Editor from './Editor';

export default class JavascriptEditor extends React.Component {
  render() {
    const { options, ...rest } = this.props;
    return (
      <Editor {...rest} options={{ mode: 'javascript', ...this.props.options }} />
    );
  }
}
