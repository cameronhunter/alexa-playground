import React from 'react';
import CodeMirror from 'react-codemirror';

try {
  require('codemirror/mode/javascript/javascript');
} catch (e) {
  // Don't include in server rendering
}

const defaultOptions = {
  tabSize: 2,
  lineNumbers: true,
  viewportMargin: Infinity
};

export default class JavascriptEditor extends React.Component {
  render() {
    const { options, ...rest } = this.props;
    return (
      <CodeMirror {...rest} options={{ ...defaultOptions, ...this.props.options }} className="Editor" />
    );
  }
}
