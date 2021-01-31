import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './menu-items.module.scss';

type menuItemType = {
    title: string
    imageUrl: string
    size?: string
    linkUrl: string
}

const MenuItems = ({ title, imageUrl, size }: menuItemType): ReactElement => {
    return (
        <Link href={`/shop/${title}`}>
            <div className={`${size} ${styles.menu_item}`}>
                <div
                    className={styles.background_image}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />

                <div className={styles.content}>
                    <h1 className={styles.title}>{title.toUpperCase()}</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
        </Link>
    );
};

export default MenuItems;
