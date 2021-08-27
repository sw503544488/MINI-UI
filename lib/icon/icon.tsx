import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {

    return (
      <div className='mini-icon'>

        <svg className={classes('fui-icon', className)}
             {...restProps}
        >
          <use xlinkHref={`#${name}`}/>
        </svg>
      </div>
    );
  };

export default Icon;