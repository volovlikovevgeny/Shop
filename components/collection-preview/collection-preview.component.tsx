import React, { ReactElement } from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import styles from './collection-preview.module.scss';

type Items = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
}

type collectionPreview = {
    title: string,
    routeName: string,
    items: Items[]
}

const CollectionPreview = ({ items, title, routeName }: collectionPreview): ReactElement => {
    return (
        <div className={styles.collection_preview}>
            <h1 className={styles.title}>{title.toUpperCase()}</h1>
            <div className={styles.preview}>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({ id, ...otherItemProps }) => (

                            <CollectionItem routeName={routeName} key={id} {...otherItemProps} />
                        ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;


