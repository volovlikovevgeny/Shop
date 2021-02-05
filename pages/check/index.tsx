import React, { ReactElement } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import styles from './check.module.scss';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { AppProps } from 'next/dist/next-server/lib/router/router';


const CheckoutPage = ({ cartItems,total }: AppProps): ReactElement => {
    return (
        <div className={styles.checkout_page}>
            <div className={styles.checkout_header}>
                <div className={styles.header_block}>
                    <span>Product</span>
                </div>
                <div className={styles.header_block}>
                    <span>Description</span>
                </div>
                <div className={styles.header_block}>
                    <span>Quantity</span>
                </div>
                <div className={styles.header_block}>
                    <span>Price</span>
                </div>
                <div className={styles.header_block}>
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <div className={styles.total}> TOTAL: ${total}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
