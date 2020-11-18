import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to Michael Shop</h1>
        <DirectoryMenu/>
    </div>
);

export default HomePage;