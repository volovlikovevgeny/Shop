import React, { FormEvent, ChangeEvent, FC } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../utils/firebase';
import { auth } from '../../utils/firebase';
import { SetcurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './sign-in.module.scss';


type SignInProps = {
    userAuth: any
}

type SignInState = {
    email: string,
    password: string,
    [name: string]: string,
    currentUser: any,
}

class SignIn extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps | Readonly<SignInProps>) {
        super(props);

        this.state = {
            email: '',
            password: '',
            currentUser: '',
        };
    }


    unsubscribeFromAuth: any = null;


    componentDidMount(): void {

        const { userAuth } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            userAuth(user);
        });
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth();
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
    };


    handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render(): JSX.Element {

        const { email, password } = this.state;
        return (
            <div className={styles.sign_in}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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
                    <div className={styles.buttons}>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userAuth: bindActionCreators(SetcurrentUser, dispatch),
    // (user) => dispatch(SetcurrentUser(user)),
});



export default connect(null,mapDispatchToProps)(SignIn);

