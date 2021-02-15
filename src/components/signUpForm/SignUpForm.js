import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { axiosConfig } from '../../helpers/axiosConfig'
import { useAuthentication } from '../../hooks/authentication'
import Spinner from '../spinner/Spinner'
import { TextInput } from '../textInput/TextInput'

import './SignUpForm.css'

export const SignUpForm = () => {

    const { ...methods } = useForm({ mode: 'onBlur' })
    const currentPassword = methods.watch("password")
    const { login } = useAuthentication()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSuccess = (formData) => {

        setIsLoading(true)

        addUser(formData)
        async function addUser(userData) {
            try {
                await axiosConfig.post('api/auth/signup', {
                    "username": userData.email,
                    "password": userData.password
                })
                setIsLoading(false)

                const result = await login(userData.email, userData.password)
                if (result) {
                    history.push('/')
                } else {
                    history.push('/sign-in')
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    const onError = (errorList) => {
        console.log(errorList)
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
        <>
            {isLoading && <Spinner />}
            <FormProvider {...methods} >
                <form className="dropit-form" onSubmit={methods.handleSubmit(onSuccess, onError)}>
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
                    <p className="small-text">By creating an account, you agree to the <Link to="/terms-of-service">Terms of Service</Link></p>
                </form>
            </FormProvider>
        </>
    )
}
