import React from 'react';
import Try from 'promise-try';
import Editor from './Editor';
import commonjs from 'babel-plugin-transform-es2015-modules-commonjs';
import decorators from 'babel-plugin-transform-decorators-legacy';
import reactJSX from 'babel-plugin-transform-react-jsx';
import es2015 from 'babel-preset-es2015';
import stage1 from 'babel-preset-stage-1';
import { transform } from 'babel-core';
import Titled from './Titled';

export default class SkillResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props = {}) {
    const Request = Try(() => JSON.parse(props.request));

    const Skill = Try(() => {
      const exports = {};
      const { Launch, Intent, Skill, SessionEnded } = require('alexa-lambda-skill');
      const Response = require('alexa-response');
      const { ssml } = require('alexa-ssml');
      const source = transform(props.skill, {
        presets: [es2015, stage1],
        plugins: [
          decorators,
          commonjs,
          [reactJSX, { pragma: 'ssml' }]
        ]
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
    return (
      <Titled title='Response'>
        <Editor {...this.props} value={this.state.content} lineNumbers={false} readOnly={true} />
      </Titled>
    );
  }
}
