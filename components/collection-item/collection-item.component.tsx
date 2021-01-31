import React, { ReactElement } from 'react';
import styles from './collection-item.module.scss';


type CollectionItems = {
    imageUrl: string,
    name: string,
    price: number,
    routeName:string | undefined,
}

const CollectionItem = ({ imageUrl, name, price, routeName }: CollectionItems): ReactElement => {
    return (
        <div className={styles.collection_item}>
            <div 
            className={styles.image}
            style={{backgroundImage:`url(${imageUrl})`}}
            />

            <div className={styles.collection_footer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>${price}</div>
            </div>
        </div>
    );
};


export default CollectionItem;
