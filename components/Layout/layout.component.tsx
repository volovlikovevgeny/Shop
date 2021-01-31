import React, { ReactElement, ReactNode } from 'react';
import Header from '../header/header.component';
import Head from 'next/head';

import styles from './layout.module.scss';



type LayoutType = {
    children: ReactNode,
    title: string
}

const Layout = ({ children, title = 'E-commerce' }: LayoutType): ReactElement => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <Header />

        <main className={styles.container}>
            {children}
        </main>

        <footer className={styles.footer} >E-commerce platform</footer>
    </React.Fragment>
);


export default Layout;
