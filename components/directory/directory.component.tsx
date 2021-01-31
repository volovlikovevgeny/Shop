import React, { ReactNode } from 'react';
import MenuItems from '../menu-items/menu-items.component';
import styles from './directory.module.scss';


type SampleProps = {
}

type SectionState = {
    sections: {
        title: string,
        imageUrl: string,
        id: number,
        linkUrl: string,
        size?: string,
    }[]
}

class Directory extends React.Component<SampleProps, SectionState> {
    constructor(props: SampleProps) {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats',
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '',
                }, {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: '',
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '',
                },
            ],
        };
    }
    
    render(): ReactNode {
        return (
            <div className={styles.directory_menu}>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) =>
                        <MenuItems key={id} {...otherSectionProps} />,
                    )
                }
            </div>
        );
    }
}

export default Directory;
