import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { IoPencilSharp } from 'react-icons/io5';
import { getUserById } from '../../axios/axiosConfig';
import { TextInput } from '../../components/textInput/TextInput';
import { useAuthentication } from '../../hooks/authentication';

import styles from './MyProfile.module.css'

function MyProfile() {

    const { user, isAdmin } = useAuthentication()
    const [userData, setUserData] = useState()
    const [disabled, setDisabled] = useState(true)
    const { ...methods } = useForm({ mode: 'onBlur' })

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getUserById(user.userId)
                console.log(result.data)
                setUserData(result.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [user])

    const onSuccess = (formData) => {

        updateUser(formData)

        async function updateUser(userData) {
            try {
                await updateUser(user)
                // history.push('/sign-in')
            } catch (error) {
                console.error(error)
            }
        }
    }

    const onError = (errorList) => {
        console.log(errorList)
    }

    return (
        <FormProvider {...methods} >
            <div
                onSubmit={methods.handleSubmit(onSuccess, onError)}
                className={styles['center']}
            >
                <div className={styles['full-page']}>
                    <h3>My Profile</h3>
                    <div>
                        {userData && (
                            // <ul>
                            //     <li>Username: {userData.username}</li>
                            //     <li>First Name: {userData.firstName}</li>
                            //     <li>Last Name: {userData.lastName}</li>
                            //     <li>E-mail: {userData.email}</li>
                            // </ul>
                            <form className="sign-up-form">
                                <div
                                    className={styles['edit']}
                                    onClick={() => setDisabled(!disabled)}
                                >
                                    <IoPencilSharp />
                                    <span>edit</span>
                                </div>
                                <TextInput
                                    type="text"
                                    label="User name"
                                    name="username"
                                    value={userData.username}
                                    fieldRef={methods.register({
                                        required: "Your user name is required"
                                    })}
                                    disabled={true}
                                />
                                <TextInput
                                    type="text"
                                    label="First name"
                                    name="firstName"
                                    value={userData.firstName}
                                    disabled={disabled}
                                />
                                <TextInput
                                    type="text"
                                    label="Last name"
                                    name="lastname"
                                    value={userData.lastName}
                                    disabled={disabled}
                                />
                                <TextInput
                                    type="text"
                                    label="E-mail"
                                    name="email"
                                    value={userData.email}
                                    disabled={disabled}
                                />
                                {!disabled && <button type="submit">Save</button>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}

export default MyProfile
