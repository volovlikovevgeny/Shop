import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import MenuItems from '../menu-items/menu-items.component';
import styles from './directory.module.scss';


type SampleProps = {
    sections: {
        title: string,
        imageUrl: string,
        id: number,
        linkUrl: string,
        size?: string,
    }[]
}

class Directory extends React.Component<SampleProps> {
    render(): ReactNode {

        const { sections } = this.props;

        return (
            <div className={styles.directory_menu}>
                {
                    sections.map(({ id, ...otherSectionProps }) =>
                        <MenuItems key={id} {...otherSectionProps} />,
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({ section }) => ({
    sections: section.sections,
});

export default connect(mapStateToProps)(Directory);
