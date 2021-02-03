import React, { ReactElement } from 'react';
import styles from './cart-item.module.scss';


type Item = {
    item: {
        name?: string,
        imageUrl?: string
        price?: number
        quantity?: number
    }
}

const CartItem = ({ item: { imageUrl, price, name,quantity } }: Item): ReactElement => {

    return (
        <div className={styles.cart_item}>
            <img src={imageUrl} alt="Item"/>

            <div className={styles.item_details}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{quantity} x ${price}</span>
            </div>
        </div>
    );
};

export default CartItem;
