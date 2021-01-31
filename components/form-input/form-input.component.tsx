import React, { ReactElement, ChangeEvent } from 'react';
import styles from './form-input.module.scss';


type FormInputType = {
    label: string
    name: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    required: boolean
    type: string
    value: string
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputType): ReactElement => {
    return (
        <div className={styles.group}>
            <input
                className={styles.form_input}
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                <label
                    className={`${otherProps.value.length ? styles.shrink : ''
                        } ${styles.form_input_label}`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
