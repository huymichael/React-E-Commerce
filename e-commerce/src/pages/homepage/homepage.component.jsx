import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory/directory.component';

export const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <DirectoryMenu/>
    </div>
);