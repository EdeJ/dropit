import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { axiosConfig } from '../../axios/axiosConfig'
import FlashMessage from 'react-flash-message'
import { useAuthentication } from '../../hooks/authentication'
import { TextInput } from '../../components/TextInput'
import FileInput from '../../components/FileInput'
import { useHistory } from 'react-router-dom'

import '../../components/signUpForm/SignUpForm.css'

function AddDemo() {

    // TODO maak een css module

    const { register, handleSubmit, errors } = useForm()
    const [message, setMessage] = useState()
    const { user } = useAuthentication()
    const history = useHistory()

    async function onSubmit(data) {
        setMessage()

        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('userId', user.userId)
        formData.append('fileName', data.file[0].name)
        formData.append('songTitle', data.songTitle)
        formData.append('artist', data.artist)

        try {
            const result = await axiosConfig.post('api/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': user.accessToken
                }
            })
            setMessage({ text: result.data, type: 'success' })
            history.push('/my-demos')
        } catch (error) {
            console.log(error)
            setMessage({ text: 'Error in file upload', type: 'error' })
        }
    }

    return (
        <div className="full-page">
            <h3>Add new demo</h3>
            <FormProvider errors={errors} >
                <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* // TODO form className   */}
                    <FileInput
                        type="file"
                        name="file"
                        fieldRef={register({
                            required: {
                                value: true,
                                message: "You must add a mp3 audio file"
                            }
                        })
                        }
                    />
                    <TextInput
                        type="text"
                        label="Song title"
                        name="songTitle"
                        fieldRef={register({
                            required: {
                                value: true,
                                message: "You must specify a song title"
                            }
                        })
                        }
                    />
                    <TextInput
                        type="text"
                        label="Artist"
                        name="artist"
                        fieldRef={register({
                            required: {
                                value: true,
                                message: "You must specify an artist name"
                            }
                        })
                        }
                    />
                    <button>upload</button>
                </form>
            </FormProvider>
            {message && (
                <FlashMessage duration={5000} className={message.type}>
                    <strong>{message.text}</strong>
                </FlashMessage>
            )}
        </div >

    )
}

export default AddDemo


