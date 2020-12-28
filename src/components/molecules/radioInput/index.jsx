import React from 'react'
import { Input, Label } from '../../atoms'

export const RadioInput = ({ label, name, value, fieldRef }) => {
    return (
        <div className="radio-set">
            <Input type="radio" name={name} fieldRef={fieldRef} value={value} />
            <Label name={name}>{label}</Label>
        </div>
    )
}

