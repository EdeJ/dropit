import React from 'react'
import { useFormContext } from 'react-hook-form';
import { ErrorMessage, Label } from '../../atoms'

export const RadioGroup = ({ children, label, name }) => {

    const { errors } = useFormContext();

    return (
        <div className="input-section">
            <Label>{label}</Label>
            <div className="radio-group">
                {children}
            </div>
            {errors[name] && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
