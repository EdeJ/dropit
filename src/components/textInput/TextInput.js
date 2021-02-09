import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './TextInput.module.css'

export const TextInput = ({ name, label, type, fieldRef, value, disabled }) => {

    const { errors } = useFormContext();

    return (
        <div className={styles['input-section']}>
            <label htmlFor={name}>{label}</label>
            <input
                className={errors[name] ? styles['error'] : ''}
                type={type}
                id={name}
                name={name}
                ref={fieldRef}
                value={value}
                disabled={disabled}
            />
            {errors[name] &&
                <p className={styles['error-message']}>
                    {errors[name].message}
                    {errors[name].type === "emailAvailable" && <span>Email is invalid or already taken</span>}
                </p>
            }
        </div>
    )
}
