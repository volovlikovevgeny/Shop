import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import styles from './auth.module.scss';

const SignInAndSignUp = ({ redirect }): ReactElement => {

    const router = useRouter();

    useEffect(() => {
        redirect === null ? null : router.push('/');
    }, [redirect]);

    return (
        <div className={styles.SignInAndSignUp} >
            <SignIn />
            <SignUp />
        </div>
    );
};


const mapStateToProps = ({ user }) => ({
    redirect: user.currentUser,
});


export default connect(mapStateToProps)(SignInAndSignUp);
