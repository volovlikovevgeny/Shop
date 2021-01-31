import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import styles from './cart-icon.module.scss';


const CartIcon = ({ toggleCartHidden }): ReactElement => {
    return (
        <div onClick={() => toggleCartHidden()} className={styles.cart_icon} >
            <div className={styles.shopping_icon}></div>
            <span className={styles.item_count}>0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null,mapDispatchToProps)(CartIcon);
