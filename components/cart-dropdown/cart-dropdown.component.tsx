import React, { ReactElement } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

import styles from './cart-dropdown.module.scss';

type cartItems = {
    cartItems: {
       name: string;
       imageUrl: string;
       price: number;
       quantity: number;
       length:number;
   }
}


const CartDropdown = ({ cartItems }:cartItems): ReactElement => {
    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>


                {

                    cartItems.length === 0 ? <div className={styles.message}>You Cart Is Empty</div> :
                        cartItems.map((cartItem: { id?: number; name?: string; imageUrl?: string; price?: number; quantity?: number; }) => (
                            <CartItem key={cartItem.id} item={cartItem} />

                        ))

                }
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});


export default connect(mapStateToProps)(CartDropdown);
