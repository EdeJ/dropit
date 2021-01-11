import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosConfig } from '../axios/axiosConfig'

function AddDemo() {

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const formData = new FormData()
        formData.append("file", data.file[0]);

        try {
            const result = await axiosConfig.post('/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="full-page">
            <h3>Add new demo</h3>
            {/* <FileUpload /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    ref={register}
                    type="file"
                    name="file"
                />
                <button>upload</button>
            </form>
        </div>

    )
}

export default AddDemo


