import React from 'react'
import { useFormContext } from 'react-hook-form';
import { Label } from '../../atoms'


export const TextArea = ({ label, name, fieldRef }) => {

    const { errors } = useFormContext();
    const hasErrors = errors[name] ? true : false;

    return (
        <div className="input-section">
            <Label name={name} >{label}</Label>
            <textarea
                className={hasErrors ? 'error' : ''}
                ref={fieldRef}
                name={name}
                id={name}
            />
        </div>
    )
}