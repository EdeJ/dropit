import React from 'react'
import { useFormContext } from 'react-hook-form'

function FileInput({ name, label, type, fieldRef }) {

    const { errors } = useFormContext()

    return (
        <div className="input-section">
            <label htmlFor={name}>{label}</label>
            <input
                className={errors[name] ? 'error' : ''}
                type={type}
                id={name}
                name={name}
                ref={fieldRef}
            />
            {errors[name] &&
                <p className="error-message">
                    {errors[name].message}
                </p>
            }
        </div>
    )
}

export default FileInput