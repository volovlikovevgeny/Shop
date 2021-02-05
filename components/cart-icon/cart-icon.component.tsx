import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import styles from './cart-icon.module.scss';
import Image from 'next/image';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

type CartIconType = {
    toggleCartHidden: () => void,
    itemCount: number
}

const CartIcon = ({ toggleCartHidden, itemCount }: CartIconType): ReactElement => {
    return (
        <div onClick={() => toggleCartHidden()} className={styles.cart_icon} >
            <div className={styles.shopping_icon}>
                <Image
                    src='/bag.png'
                    alt="P"
                    width={24}
                    height={24}
                />
            </div>
            <span className={styles.item_count}>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
