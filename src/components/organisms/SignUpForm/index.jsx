import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../atoms'
import { CheckBox, NumberInput, RadioGroup, RadioInput, TextArea, TextInput } from '../../molecules'
import { PasswordInput } from '../../molecules/passwordInput'
import './formStyles.css'


export const SignUpForm = () => {

    const { ...methods } = useForm();
    const password = useRef({});
    password.current = methods.watch("password", "");


    const onSuccess = (formData) => {
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
                <PasswordInput
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
                <PasswordInput
                    label="Repeat password *"
                    name="password-repeat"
                    fieldRef={methods.register({
                        validate: value => value === password.current || "The passwords do not match"
                    })}
                />
                <Button>Sign up for dropit</Button>
                <p className="small-text">By creating an account, you agree to the Terms of Service.</p>
            </form>
        </FormProvider>
    )
}
