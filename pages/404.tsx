import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = (): ReactElement => {

    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

    return <>Not Found</>;
};

export default NotFound;

