import React from 'react';
import CodeMirror from 'react-code-mirror';

export default class Editor extends React.Component {
  static defaultProps = {
    tabSize: 2,
    lineNumbers: true,
    viewportMargin: Infinity,
    matchBrackets: true,
    smartIndent: true,
    onChange: () => {}
  };

  onChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    return <CodeMirror {...this.props} {...this.state} onChange={({ target }) => this.onChange(target.value)} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />;
  }
}
