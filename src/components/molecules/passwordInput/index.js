import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage, Input, Label } from '../../atoms'


export const PasswordInput = ({ name, label, fieldRef }) => {

    const { errors } = useFormContext();
    const hasErrors = errors[name] ? true : false;

    return (
        <div className="input-section">
            <Label name={name} >{label}</Label>
            <Input type="password" name={name} fieldRef={fieldRef} hasErrors={hasErrors} />
            {hasErrors && <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>}
        </div>
    )
}
