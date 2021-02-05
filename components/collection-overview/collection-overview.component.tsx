import React, { ReactElement } from 'react';
import styles from './collection-overview.module.scss';


const CollectionOverview = (): ReactElement => {
    return (
        <div className={styles.colleciton_overview}>
            {/* {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            } */}
            <div>CollecitonOverview</div>
        </div>
    );
};



export default CollectionOverview;
