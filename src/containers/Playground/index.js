import React from 'react';
import SplitPanel from 'react-split-panel';

import SkillFixture from '../../fixtures/skill';
import RequestFixture from '../../fixtures/request';

import SkillEditor from '../../components/SkillEditor';
import RequestEditor from '../../components/RequestEditor';
import SkillOutput from '../../components/SkillOutput';

export default class Playground extends React.Component {
  static defaultProps = {
    skill: SkillFixture,
    request: RequestFixture
  };

  constructor(props) {
    super(props);
    this.state = {
      skill: props.skill,
      request: props.request
    };
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <SplitPanel direction='horizontal' defaultWeights={[60, 40]}>
          <SkillEditor value={this.state.skill} onChange={skill => this.setState({ skill })} />
          <SplitPanel direction='vertical' defaultWeights={[50, 50]}>
            <RequestEditor value={this.state.request} onChange={request => this.setState({ request })} />
            <SkillOutput skill={this.state.skill} request={this.state.request} />
          </SplitPanel>
        </SplitPanel>
      </div>
    );
  }
};
