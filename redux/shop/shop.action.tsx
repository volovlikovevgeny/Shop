import { shopActionTypes } from './shop.types';

export const fetchShopData = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const res = await fetch('http://localhost:4001/shopcollection');
    const data = await res.json();

    dispatch({
        type: shopActionTypes.FETCH_SHOP_DATA,
        payload: data,
    });
};

