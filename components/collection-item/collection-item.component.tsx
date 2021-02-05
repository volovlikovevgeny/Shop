import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import Modal from '../modal/modal.component';

import styles from './collection-item.module.scss';


type CollectionItems = {
    item: {
        imageUrl: string,
        name: string,
        price: number,
        routeName: string | undefined,
    }

    addItem: (item: CollectionItems) => void
}

const CollectionItem = ({ item, addItem }: CollectionItems): ReactElement => {
    const { imageUrl, price, name } = item;

    const [modal, openModal] = useState(false);


    const changeModal = () => {
        openModal(!modal);
    };

    return (
        <div className={styles.collection_item}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className={styles.collection_footer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <div className={styles.custom_button}>
                <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
                <CustomButton onClick={changeModal}>
                    See More
                </CustomButton>

            </div>
            {
                modal === true ? <Modal item={item}>{JSON.stringify(item)}</Modal> : null
            }
        </div>
    );
};


const mapDispatchToProps = (dispatch: (arg0: AnyAction) => void) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
