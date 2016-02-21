import React from 'react';
import CodeMirror from 'react-code-mirror';

try {
  require('codemirror/mode/javascript/javascript');
} catch (e) {
  // Don't include in server rendering
}

export default class Editor extends React.Component {
  static defaultProps = {
    tabSize: 2,
    lineNumbers: true,
    viewportMargin: Infinity,
    matchBrackets: true,
    smartIndent: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    onChange: src => {}
  };

  onChange({ target }) {
    this.setState({ value: target.value });
    this.props.onChange(target.value);
  }

  render() {
    return <CodeMirror {...this.props} {...this.state} onChange={(...args) => this.onChange(...args)} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />;
  }
}
