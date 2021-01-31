import { GetServerSideProps } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { ReactElement, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

type CollectionData = {
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

const ShopPage = ({ShopCollections}:AppProps): ReactElement => {
    const [collections, setCollection] = useState<CollectionData[]>([]);

    useEffect(() => {
        setCollection(ShopCollections);
    }, []);

    return (
        <React.Fragment>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </React.Fragment>
    );
};

export default connect()(ShopPage);


export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('http://localhost:4001/shopcollection');
    const ShopCollections = await response.json();

    return {
        props: {
            ShopCollections,
        },
    };
};



