import React, { FormEvent, ChangeEvent, useState, ReactElement } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { setCurrentUser } from '../../redux/user/user.actions';

import styles from './sign-in.module.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { connect } from 'react-redux';


const SignIn = ({ CurrentUser }: AppProps): ReactElement => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });


    };


    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        CurrentUser(formData);
    };

    const { email, password } = formData;

    return (
        <div className={styles.sign_in}>
            <h2>Sign in with Email and Password</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={email}
                    label={'Email'}
                    required
                />
                <FormInput
                    name='password'
                    type="password"
                    handleChange={handleChange}
                    value={password}
                    label={'Password'}
                    required
                />
                <div className={styles.buttons}>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </div>
            </form>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    CurrentUser: user => dispatch(setCurrentUser(user)),
});


export default connect(null, mapDispatchToProps)(SignIn);

