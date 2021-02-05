import React, { FC, useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import LoadingSpinner from '../components/loading/loading.component';
import Layout from '../components/Layout/layout.component';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';


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
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Layout title={'E-commerce platform'}>
                    {
                        loading
                            ?
                            <LoadingSpinner />
                            :
                            <Component {...pageProps} />
                    }
                </Layout>
            </PersistGate>
        </Provider>
    );

};




const makeStore = () => store;
const wrapper = createWrapper(makeStore);


export default wrapper.withRedux(MyApp);
