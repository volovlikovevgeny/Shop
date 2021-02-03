import { AnyAction } from 'redux';
import { CartActionTypes } from './cart.types';

export const toggleCartHidden = (): AnyAction => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

interface itemType {
    imageUrl: string,
    name: string,
    price: number,
    routeName: string | undefined,
}

export const addItem = (item: itemType): AnyAction => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});
