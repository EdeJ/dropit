import React from 'react'

export const Button = ({ children, type = 'submit' }) => (
    <button type={type}>{children}</button>
);