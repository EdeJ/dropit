import React from 'react'
import { useFormContext } from 'react-hook-form';
import { ErrorMessage, Input, Label } from '../../atoms';


export const CheckBox = ({ label, name, fieldRef, value }) => {
    const { errors } = useFormContext();

    return (
        <div className="input-section checkbox">
            <Input type="checkbox" fieldRef={fieldRef} name={name} value={value} />
            <Label name={name} >{label}</Label>
            {errors[name] && (
                <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>
            )}
        </div>
    )
}