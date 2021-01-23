import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosConfig } from '../axios/axiosConfig'
import FlashMessage from 'react-flash-message'
import { useAuthentication } from '../hooks/authentication'

function AddDemo() {

    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()
    const { user } = useAuthentication()
    // console.log(user)

    async function onSubmit(data) {
        setMessage()

        const formData = new FormData()
        formData.append('file', data.file[0])
        formData.append('fileName', 'this is a filename')
        formData.append('fileTitle', 'Dit is gewoon een titel!')

        try {
            const result = await axiosConfig.post('/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': user.accessToken
                }
            })
            // console.log(result.data)
            setMessage({ text: result.data, type: 'success' })
        } catch (error) {
            console.log(error)
            setMessage({ text: 'Error in file upload', type: 'error' })
        }
    }

    return (
        <div className="full-page">
            <h3>Add new demo</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    ref={register}
                    type="file"
                    name="file"
                />
                <button>upload</button>
            </form>
            {message && (
                <FlashMessage duration={5000} className={message.type}>
                    <strong>{message.text}</strong>
                </FlashMessage>
            )}
        </div >

    )
}

export default AddDemo


