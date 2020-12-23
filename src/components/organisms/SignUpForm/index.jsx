import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../atoms'
import { CheckBox, NumberInput, RadioGroup, RadioInput, TextArea, TextInput } from '../../molecules'
import './formStyles.css'



export const SignUpForm = () => {

    const { ...methods } = useForm();
    const password = useRef({});
    password.current = methods.watch("password", "");

    // const pets = [
    //     { value: 'cat', label: 'Kat' },
    //     { value: 'dog', label: 'Hond' },
    //     { value: 'hamster', label: 'Hamster' },
    //     { value: 'mouse', label: 'Muis' },
    //     { value: 'other', label: 'Anders' }
    // ]

    // const currentPet = methods.watch('pet');

    const onSuccess = (formData) => {
        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList);
    }

    return (
        <FormProvider {...methods} >
            <form className="sign-up-form" onSubmit={methods.handleSubmit(onSuccess, onError)}>
                <TextInput
                    label="E-mail *"
                    name="email"
                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Your e-mail address is required"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid e-mail address"
                        }
                    })}
                />
                {/* <TextInput
                    label="Password *"
                    name="password"
                    fieldRef={methods.register({
                        required: "You must specify a password",
                        minLength: {
                            value: 4,
                            message: "Password must have at least 4 characters"
                        }
                    })}
                />

                <TextInput
                    label="Repeat password *"
                    name="password"
                    fieldRef={methods.register({
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })}
                /> */}



                {/* name="password"
        type="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })} */}


                {/* <TextArea label="Opmerking" name="comment" fieldRef={methods.register} /> */}
                <CheckBox
                    name="conditions"
                    label="Ik ga akkoord met de voorwaarden *"

                    fieldRef={methods.register({
                        required: {
                            value: true,
                            message: "Je dient akkoord te gaan met de voorwaarden."
                        }
                    })}
                />
                <Button>Sign up for dropit</Button>
            </form>
        </FormProvider>
    )
}
