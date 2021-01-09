import React from 'react'
import { useFormContext } from 'react-hook-form'

export const TextInput = ({ name, label, type, fieldRef }) => {

    const { errors } = useFormContext();

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
                    {errors[name].type === "emailAvailable" && <span>Email is invalid or already taken</span>}
                </p>
            }
        </div>
    )
}
