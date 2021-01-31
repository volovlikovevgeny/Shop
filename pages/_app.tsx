import React, { FC, useState, useEffect } from 'react';
import {wrapper} from '../redux/store';
import { AppProps } from 'next/app';
import Router from 'next/router';
import LoadingSpinner from '../components/loading/loading.component';
import Layout from '../components/Layout/layout.component';


import '../global/style.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const start = () => {
            console.log('start');
            setLoading(true);
        };

        const end = () => {
            console.log('finished');
            setLoading(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);



    return (
        <>
            {
                loading
                    ?
                    <LoadingSpinner />
                    :
                    <Layout title={'E-commerce platform'}>
                        <Component {...pageProps} />
                    </Layout>
            }
        </>
    );

};

export default wrapper.withRedux(MyApp);
