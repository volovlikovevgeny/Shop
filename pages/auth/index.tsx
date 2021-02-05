import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styles from './auth.module.scss';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { AppProps } from 'next/dist/next-server/lib/router/router';



const SignInAndSignUp = ({ redirect }: AppProps): ReactElement => {

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


const mapStateToProps = createStructuredSelector({
    redirect: selectCurrentUser,
});


export default connect(mapStateToProps)(SignInAndSignUp);
