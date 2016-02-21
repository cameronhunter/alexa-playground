import React from 'react';
import Editor from './Editor';
import { transform } from 'babel-core';
import Try from 'promise-try';
import es2015 from 'babel-preset-es2015';
import stage1 from 'babel-preset-stage-1';
import decorators from 'babel-plugin-transform-decorators-legacy';
import commonjs from 'babel-plugin-transform-es2015-modules-commonjs';

const options = {
  moduleId: 'Skill',
  presets: [es2015, stage1],
  plugins: [decorators, commonjs]
};

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
      eval(transform(props.skill, options).code);
      return exports.default;
    });

    Promise.all([Skill, Request]).then(([skill, request]) => {
      return Try(() => skill(request));
    }).then(source => {
      this.setState({ source: JSON.stringify(source, null, 2), error: null });
    }).catch(({ message }) => {
      this.setState({ error: message });
    });
  }

  render() {
    return <Editor {...this.props} value={this.state.error || this.state.source} lineNumbers={false} readOnly={true} />;
  }
}
