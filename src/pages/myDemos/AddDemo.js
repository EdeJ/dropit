import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { axiosConfig } from '../../helpers/axiosConfig'
import FlashMessage from 'react-flash-message'
import { useAuthentication } from '../../hooks/authentication'
import { TextInput } from '../../components/textInput/TextInput'
import { useHistory } from 'react-router-dom'

import '../../components/signUpForm/SignUpForm.css'
import Spinner from '../../components/spinner/Spinner'

function AddDemo() {

    // TODO maak een css module

    const { register, handleSubmit, errors } = useForm()
    const [message, setMessage] = useState()
    const { user } = useAuthentication()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(data) {

        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('userId', user.userId)
        formData.append('fileName', data.file[0].name)
        formData.append('songTitle', data.songTitle)
        formData.append('artist', data.artist)

        try {
            setIsLoading(true)
            await axiosConfig.post('api/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': user.accessToken
                }
            })
            setIsLoading(false)
            history.push('/my-demos')
        } catch (error) {
            setIsLoading(false)
            setMessage({ text: 'Error in file upload', type: 'error' })
        }
    }

    return (
        <>
            {isLoading && <Spinner message="uploading file" />}
            <div className="page">
                <div className="content">
                    <h3>Add new demo</h3>
                    <FormProvider errors={errors} >
                        <form className="dropit-form" onSubmit={handleSubmit(onSubmit)}>
                            <TextInput
                                label="mp3 max 10MB "
                                type="file"
                                name="file"
                                fieldRef={register({
                                    required: {
                                        value: true,
                                        message: "You must add a mp3 audio file"
                                    },
                                    validate: {
                                        fileSize: async value => value[0].size <= 11000000,
                                        fileType: async value => value[0].type === "audio/mpeg"
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
                        <FlashMessage duration={5000}>
                            <strong>{message.text}</strong>
                        </FlashMessage>
                    )}
                </div>
            </div>
        </>
    )
}

export default AddDemo


