import React from 'react';
import Editor from './Editor';

export default class JSONEditor extends React.Component {
  render() {
    const { options, ...rest } = this.props;
    return (
      <Editor {...rest} options={{ mode: 'json', ...this.props.options }} />
    );
  }
}
