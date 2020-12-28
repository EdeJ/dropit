import React from 'react';

export const Input = ({ name, type, fieldRef, value, hasErrors }) => {

    return (
        <input
            className={hasErrors ? 'error' : ''}
            type={type}
            id={name}
            name={name}
            ref={fieldRef} value={value}
        />
    )
}

