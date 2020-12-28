import React from 'react'

export const ErrorMessage = ({ children }) => {
    return (
        <p className="error-message">
            {children}
        </p>
    )
}

