import LayoutExample from './layout.example';
import Demo from '../../demo';
import React, {Fragment} from 'react';

const LayoutDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./layout.example.tsx').default} >
        <LayoutExample/>
      </Demo>
    </Fragment>
  );
};

export default LayoutDemo;