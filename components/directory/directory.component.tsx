import React, { ReactElement } from 'react';
import MenuItems from '../menu-items/menu-items.component';
import styles from './directory.module.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';


type SectionType = {
    sections: {
        id: number,
        imageUrl: string,
        linkUrl: string,
        title: string,
    }[]
}

const Directory = ({ sections }: SectionType): ReactElement => {
    return (
        <div className={styles.directory_menu}>
            {
                sections.map(({ id, ...otherSectionProps }) =>
                    <MenuItems key={id} {...otherSectionProps} />,
                )
            }
        </div>
    );
};



const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});


export default connect(mapStateToProps)(Directory);
