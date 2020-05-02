import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageURL, size}) => (
    <React.Fragment>
        <div className={`${size} menu-item`}>
            <div style={{backgroundImage: `url(${imageURL})`}}
                 className='background-image'>
            </div>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW </span>
            </div>
        </div>
    </React.Fragment>);
export default MenuItem;