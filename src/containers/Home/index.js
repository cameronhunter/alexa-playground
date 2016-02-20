import React from 'react';
import SplitPanel from 'react-split-panel';

import SkillFixture from '../../fixtures/skill';
import RequestFixture from '../../fixtures/request';

import JSONEditor from '../../components/JSONEditor';
import JavascriptEditor from '../../components/JavascriptEditor';

export default props => {
  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
      <SplitPanel direction="horizontal" defaultWeights={[50, 50]}>
        <JavascriptEditor value={SkillFixture} {...props} />
        <SplitPanel direction="vertical" defaultWeights={[50, 50]}>
          <JSONEditor value={RequestFixture} options={{ lineNumbers: false }} />
          <JSONEditor options={{ lineNumbers: false, readOnly: true }} />
        </SplitPanel>
      </SplitPanel>
    </div>
  );
};
