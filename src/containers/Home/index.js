import React from 'react';
import JSONEditor from '../../components/JSONEditor';
import JavascriptEditor from '../../components/JavascriptEditor';

export default props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flex: '1 0 50%', borderRight: '1px solid #000' }}>
        <JavascriptEditor {...props} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 50%' }}>
        <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flex: '1 0 50%' }}>
          <JSONEditor {...props} />
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flex: '1 0 50%', borderTop: '1px solid #000' }}>
          <JSONEditor value={`{ "foo": "bar" }`} {...props} />
        </div>
      </div>
    </div>
  );
};
