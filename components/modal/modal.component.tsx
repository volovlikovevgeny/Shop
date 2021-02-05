import React, { ReactNode, useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import styles from './modal.module.scss';
import { connect } from 'react-redux';
import { AppProps } from 'next/app';

type ModalType = {
    children?: ReactNode
    item: {
        imageUrl: string;
        name: string;
        price: number;
    }

    addItem: (item: AppProps) => void
}

const Modal = ({ item, addItem }: ModalType) => {

    const [display, setDisplay] = useState(true);

    const close = () => {
        setDisplay(false);
    };

    if (display) {
        return (
            <div className={styles.modal_wrapper}>
                <div onClick={close} className={styles.modal_backdrop}></div>
                <div className={styles.modal_box}>
                    <div className={styles.image}><img src={item.imageUrl} alt="Item" /></div>
                    <div className={styles.description}>
                        <h1 className={styles.name}>{item.name}</h1>
                        <h1 className={styles.price}>${item.price}</h1>
                        <div className={styles.inverted}>
                            <CustomButton onClick={() => addItem(item)}>Add Item</CustomButton>
                        </div>
                    </div>
                    <span onClick={close} className={styles.closeBtn}>&#10005;</span>
                </div>
            </div>
        );
    }
    return null;

};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Modal);
