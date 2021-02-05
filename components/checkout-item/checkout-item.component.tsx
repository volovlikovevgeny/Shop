import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';



import styles from './checkout-item.module.scss';


type CheckoutType = {
    cartItem: {
        id: number,
        name: string,
        imageUrl: string,
        price: number,
        quantity: number,
    }

    addItem: (item: CheckoutType) => void,
    clearItem: (item: CheckoutType) => void,
    removeItem: (item: CheckoutType) => void
}

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: CheckoutType): ReactElement => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className={styles.checkout_item}>
            <div className={styles.img_container}>
                <img src={imageUrl} alt="item" />
            </div>

            <span className={styles.name}>{name}</span>

            <span className={styles.quantity}>
                <div onClick={() => removeItem(cartItem)} className={styles.arrow}>&#10094;</div>
                <span className={styles.value}>{quantity}</span>
                <div onClick={() => addItem(cartItem)} className={styles.arrow}>&#10095;</div>
            </span>

            <span className={styles.price}>$ {price}</span>
            <div onClick={() => clearItem(cartItem)} className={styles.remove_button}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
