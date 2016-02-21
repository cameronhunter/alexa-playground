import React from 'react';
import Try from 'promise-try';
import Editor from './Editor';
import commonjs from 'babel-plugin-transform-es2015-modules-commonjs';
import decorators from 'babel-plugin-transform-decorators-legacy';
import es2015 from 'babel-preset-es2015';
import stage1 from 'babel-preset-stage-1';
import { transform } from 'babel-core';

export default class SkillExecutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props = {}) {
    const Request = Try(() => JSON.parse(props.request));

    const Skill = Try(() => {
      const exports = {};
      const { Response, Launch, Intent, Skill } = require('alexa-lambda-skill');
      const source = transform(props.skill, {
        presets: [es2015, stage1],
        plugins: [decorators, commonjs]
      });

      eval(source.code);
      return exports.default;
    });

    Promise.all([Skill, Request]).then(([skill, request]) => {
      return Try(() => skill(request));
    }).then(source => {
      this.setState({ content: JSON.stringify(source, null, 2) });
    }).catch(({ message }) => {
      this.setState({ content: message });
    });
  }

  render() {
    return <Editor {...this.props} value={this.state.content} lineNumbers={false} readOnly={true} />;
  }
}
