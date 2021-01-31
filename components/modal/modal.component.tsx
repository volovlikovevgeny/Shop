import React, { ReactElement } from 'react';
import styles from './modal.module.scss';

class Modal extends React.Component {
    constructor() {
        super()

        this.state = {
            show: false,
        };
    }
    
    render() {
        console.log(this.state);
        
        return (
            <div className={styles.modal} >
                <h2>Modal Window</h2>
                <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                <div className="actions">
                    <button className="toggle-button">OK</button>
                </div>
            </div>
        );
    }
};

export default Modal;

