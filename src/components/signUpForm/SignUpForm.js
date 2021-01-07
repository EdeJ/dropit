import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { axiosConfigured } from '../../axios/axios';
import { TextInput } from '../TextInput';

import './SignUpForm.css';

export const SignUpForm = () => {

    const { ...methods } = useForm();
    const currentPassword = methods.watch("password");


    const onSuccess = (formData) => {

        async function addUser(userData) {
            try {
                const response = await axiosConfigured.post('users', userData);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

        addUser(formData)

        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList);
    }

    return (
        <FormProvider {...methods} >
            <form className="sign-up-form" onSubmit={methods.handleSubmit(onSuccess, onError)}>
                <h3>Sign Up</h3>
                <TextInput
                    type="text"
                    label="E-mail *"
                    name="email"
                    fieldRef={methods.register({
                        required: "Your e-mail address is required",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid e-mail address"
                        }
                    })}
                />
                <TextInput
                    type="password"
                    label="Password *"
                    name="password"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "You must specify a password"
                        },
                        minLength: {
                            value: 4,
                            message: "Password must have at least 4 characters"
                        }
                    })}
                />
                <TextInput
                    type="password"
                    label="Repeat password *"
                    name="password-repeat"
                    fieldRef={methods.register({
                        validate: value => value === currentPassword || "The passwords do not match"
                    })}
                />
                <button type="submit">Sign up for dropit</button>
                <p className="small-text">By creating an account, you agree to the <Link to="/">Terms of Service</Link>.</p>
            </form>
        </FormProvider>
    )
}
