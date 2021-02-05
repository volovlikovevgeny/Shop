import React, { FormEvent, ChangeEvent, useState, ReactElement } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import styles from './sign-up.module.scss';

type SignUp = {
    name: string,
    email: string,
    password: string
}

const SignUp = (): ReactElement => {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

        console.log(formData);

    };


    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

    };

    const { name, email, password, confirmPassword } = formData;

    return (
        <div className={styles.sign_up}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <FormInput
                    name="name"
                    type="name"
                    handleChange={handleChange}
                    value={name}
                    label={'DisplayName'}
                    required
                />

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

                <FormInput
                    name='confirmPassword'
                    type="password"
                    handleChange={handleChange}
                    value={confirmPassword}
                    label={'Confirm Password'}
                    required
                />
                <div className={styles.buttons}>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn >Google</CustomButton>
                </div>
            </form>
        </div>
    );
};




export default SignUp;

