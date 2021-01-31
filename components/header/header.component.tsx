import React, { ReactElement } from 'react';
import Link from 'next/link';
import Logo from '../../assets/logo';
import SearchField from '../searchfield/searchfield.component';
import styles from './header.module.scss';
import { connect } from 'react-redux';
import { auth } from '../../utils/firebase';

import { toggleCartHidden } from '../../redux/cart/cart.actions';



const Header = ({ currentUser, toggleCartHidden }): ReactElement => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <Link href='/'>
                    <div className={styles.logo}><Logo /></div>
                </Link>
            </div>
            <div className={styles.menu}>
                <SearchField />
                <Link href='/shop'><a className={styles.menu_item}>Shop</a></Link>
                <Link href='/'><a className={styles.menu_item}>Contact</a></Link>
                {
                    currentUser
                        ?
                        <Link href='/auth'><a onClick={() => auth.signOut()} className={styles.menu_item}>Sign out</a></Link>
                        :
                        <Link href='/auth'><a className={styles.menu_item}>Sign In</a></Link>
                }

                <button onClick={() => toggleCartHidden()}>Svg Icon</button>

            </div>
        </div>
    );
};

const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    hidden: cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Header);
