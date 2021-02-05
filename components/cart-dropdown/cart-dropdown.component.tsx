import React, { ReactElement } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useRouter } from 'next/router';

import { connect, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import styles from './cart-dropdown.module.scss';

type cartItems = {
    cartItems: {
        name: string;
        imageUrl: string;
        price: number;
        quantity: number;
        length: number;
    }
}

const CartDropdown = ({ cartItems }: cartItems): ReactElement => {

    const dispatch = useDispatch();

    const router = useRouter();

    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                {

                    cartItems.length ? (
                        cartItems.map((cartItem: { id?: number; name?: string; imageUrl?: string; price?: number; quantity?: number; }) => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : <span className={styles.empty_message}>Your Cart is empty</span>
                }
                <div className={styles.button}>
                    <CustomButton
                        onClick={() => {
                            dispatch(toggleCartHidden());
                            router.push('/check');
                        }}>GO TO CHECKOUT</CustomButton>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});


export default connect(mapStateToProps)(CartDropdown);
