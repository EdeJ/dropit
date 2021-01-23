import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { axiosConfig } from '../../axios/axiosConfig';

import { TextInput } from '../TextInput';

import './SignUpForm.css';

export const SignUpForm = () => {

    const { ...methods } = useForm({ mode: 'onBlur' });
    const currentPassword = methods.watch("password");


    const onSuccess = (formData) => {
        //TODO hier kan misschien één functio voor gebruikt worden, samen met het upload formulier.
        async function addUser(userData) {
            try {
                const response = await axiosConfig.post('api/auth/signup', {
                    "username": userData.email,
                    "password": userData.password
                });
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

    const checkEmailAvailable = async (email) => {
        try {
            await axiosConfig.get(`api/users/check-up/${email}`)
            return false
        } catch (error) {
            return true
        }
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
                        validate: {
                            emailAvailable: async value => await checkEmailAvailable(value)

                        },
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
