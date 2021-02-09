import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IoPencilSharp } from 'react-icons/io5'
import { getUserById, updateUser } from '../../axios/axiosConfig'
import { TextInput } from '../../components/textInput/TextInput'
import { useAuthentication } from '../../hooks/authentication'

import styles from './MyProfile.module.css'

function MyProfile() {
    const { user } = useAuthentication()
    const [userData, setUserData] = useState()
    const [disabled, setDisabled] = useState(true)
    const { ...methods } = useForm({ mode: 'onBlur' })

    useEffect(() => {

        fetchData()
        async function fetchData() {
            try {
                const result = await getUserById(user.userId)
                setUserData(result.data)
            } catch (error) {
                console.error(error)
            }
        }

    }, [user])

    const onSuccess = (formData) => {

        formData.userId = user.userId
        formData.username = user.username

        sendUser(formData)
        async function sendUser(formData) {
            try {
                await updateUser(formData)
                setDisabled(true)
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
                            <form className="dropit-form">
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
                                    fieldRef={methods.register}
                                />
                                <TextInput
                                    type="text"
                                    label="Last name"
                                    name="lastName"
                                    value={userData.lastName}
                                    disabled={disabled}
                                    fieldRef={methods.register}
                                />
                                <TextInput
                                    type="text"
                                    label="Country"
                                    name="country"
                                    value={userData.country}
                                    disabled={disabled}
                                    fieldRef={methods.register}
                                />
                                <TextInput
                                    type="text"
                                    label="Email address"
                                    name="email"
                                    value={userData.email}
                                    disabled={disabled}
                                    fieldRef={methods.register}
                                />
                                <TextInput
                                    type="text"
                                    label="Facebook"
                                    name="facebook"
                                    value={userData.country}
                                    disabled={disabled}
                                    fieldRef={methods.register}
                                />
                                <TextInput
                                    type="text"
                                    label="Instagram"
                                    name="instagram"
                                    value={userData.country}
                                    disabled={disabled}
                                    fieldRef={methods.register}
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
