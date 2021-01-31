import React, { ReactElement } from 'react';
import styles from './cart-dropdown.module.scss';


const CartDropdown = (): ReactElement => {
    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                SvgIcon
            </div>
        </div>
    );
};

export default CartDropdown;
