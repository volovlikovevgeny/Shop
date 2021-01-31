import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import styles from './collection-item.module.scss';


type CollectionItems = {
    imageUrl: string,
    name: string,
    price: number,
    routeName: string | undefined,
}

const CollectionItem = ({ item, addItem }: CollectionItems): ReactElement => {
    const { imageUrl, price, name } = item;

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
                <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
            </div>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null,mapDispatchToProps)(CollectionItem);
