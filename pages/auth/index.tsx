import React, { ReactElement } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import styles from './auth.module.scss';

const SignInAndSignUp = (): ReactElement => {
    return (
        <div className={styles.SignInAndSignUp} > 
            <SignIn />
            <SignUp/>
        </div>
    );
};

export default SignInAndSignUp;
