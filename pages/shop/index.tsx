import React, { ReactElement, useEffect } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect, useDispatch } from 'react-redux';
import { fetchShopData } from '../../redux/shop/shop.action';

type CollectionData = {
    collection: {
        id: number;
        title: string;
        routeName: string;
        items: {
            id: number;
            name: string;
            imageUrl: string;
            price: number;
        }[];
    }
}

const ShopPage = ({ collection }: CollectionData): ReactElement => {


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchShopData());
    }, []);

    return (
        <React.Fragment>
            {
                collection.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </React.Fragment>
    );
};

const mapStateToProps = ({ shop }) => ({
    collection: shop.collection,
});

export default connect(mapStateToProps)(ShopPage);


// export const getServerSideProps: GetServerSideProps = async () => {
//     const response = await fetch('http://localhost:4001/shopcollection');
//     const ShopCollections = await response.json();

//     return {
//         props: {
//             ShopCollections,
//         },
//     };
// };



