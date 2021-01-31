import React, { FormEvent, ChangeEvent } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import styles from './sign-up.module.scss';

type SignInProps = {
    email?: string,
    password?: string
}

type SignInState = {
    email: string,
    password: string,
    [name: string]: string;
}

class SignUp extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps | Readonly<SignInProps>) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }


    handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Password don`t match');
        }
    };

    private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render(): JSX.Element {
        
        const { name, email, password, confirmPassword } = this.state;


        console.log(this.state);

        return (

            <div className={styles.sign_up}>
                <h2>I don`t have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="name"
                        type="name"
                        handleChange={this.handleChange}
                        value={name}
                        label={'Name'}
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={email}
                        label={'Email'}
                        required
                    />
                    <FormInput
                        name='password'
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label={'Password'}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type="password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label={'Confirm password'}
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
