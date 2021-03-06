import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import { TextInput } from '../textInput/TextInput'
import './SignUpForm.css'
import { useAuthentication } from '../../hooks/authentication'
import Spinner from '../spinner/Spinner'

export const SignInForm = () => {

    const { ...methods } = useForm()
    const { login, user } = useAuthentication()
    const [message, setMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const onSuccess = async ({ email, password }) => {

        setIsLoading(true)

        const result = await login(email, password)
        if (!result) {
            setMessage("Incorrect username or password");
        }
        setIsLoading(false)
    }

    const onError = (errorList) => {
        console.log(errorList)
    }

    return (
        <>
            {isLoading && <Spinner />}
            {user ? (
                <Redirect to={'/'} />
            ) : (
                    <FormProvider {...methods} >
                        <form className="dropit-form" onSubmit={methods.handleSubmit(onSuccess, onError)}>
                            <h3>Sign In</h3>
                            <TextInput
                                type="text"
                                label="E-mail *"
                                name="email"
                                fieldRef={methods.register({
                                    required: "Your e-mail address is required",
                                })}
                            />
                            <TextInput
                                type="password"
                                label="Password *"
                                name="password"
                                fieldRef={methods.register({
                                    required: {
                                        value: true,
                                        message: "Enter your password"
                                    }
                                })}
                            />
                            {message && <p className="error-message">{message}</p>}
                            <button type="submit">Sign In</button>
                            <p className="small-text card"><span>New to dropit?</span> <Link to="/sign-up">Create an account</Link></p>
                        </form>
                    </FormProvider>
                )}
        </>
    )
}
