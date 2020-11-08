import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {connect} from 'react-redux';

const DirectoryMenu = ({sections}) => (
    <React.Fragment>
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id}
                          {...otherSectionProps}/>))
            }
        </div>
    </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(DirectoryMenu);
