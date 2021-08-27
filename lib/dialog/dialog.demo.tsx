import DialogExample from './dialog.example';
import Demo from '../../demo';
import React, {Fragment} from 'react';

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
        <DialogExample/>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;