import React from 'react'

export const Label = ({ children, name }) => {
    return (
        <label htmlFor={name}>{children}</label>
    )
}
