import React, { ReactElement } from 'react';
import Link from 'next/link';
import Logo from '../../public/logo';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { setCurrentUser } from '../../redux/user/user.actions';
import ShopIcon from '../cart-icon/cart-icon.component';
import styles from './header.module.scss';


type Header = {
    currentUser?:() =>void,
    hidden: boolean,
    userSingOut: () => void
}

const Header = ({ currentUser, hidden, userSingOut }: Header): ReactElement => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <Link href='/'>
                    <div className={styles.logo}><Logo /></div>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link href='/shop'><a className={styles.menu_item}>Shop</a></Link>
                <Link href='/'><a className={styles.menu_item}>Contact</a></Link>
                {
                    currentUser != null
                        ?
                        <span onClick={() => userSingOut()} className={styles.menu_item}>Sign out</span>
                        :
                        <Link href='/auth'><a className={styles.menu_item}>Sign In</a></Link>
                }
                <ShopIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    );
};

const mapStateToProps = ({ cart, user }) => ({
    hidden: cart.hidden,
    currentUser: user.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    userSingOut: () => dispatch(setCurrentUser(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
