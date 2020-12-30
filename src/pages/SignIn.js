import React, { useEffect } from 'react'
import { SignInForm } from '../components/SignInForm'

function SignIn({ setShowPlayer }) {

    useEffect(() => {
        setShowPlayer(false);
    }, [setShowPlayer])

    return (
        <div className="page">
            <div className="content">
                <SignInForm />
            </div>
        </div>
    )
}

export default SignIn
