import React from 'react';

export default props => (
  <div>Hello {props.params.name || 'World'}!</div>
);
