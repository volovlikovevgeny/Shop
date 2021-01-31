import React, { ReactElement } from 'react';
import {useRouter} from 'next/router';

const ShopPage = (): ReactElement => {
    const router = useRouter();

    const {query} = router;

    return (
        <div>
            <h1>{query.title}</h1>
        </div>
    );
};

export default ShopPage;
