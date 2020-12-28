import React, { useEffect } from 'react'
import { SignUpForm } from '../components/organisms/SignUpForm';

function SignUp({ setShowPlayer }) {
    useEffect(() => {
        setShowPlayer(false);
    }, [])

    return (
        <div className="page">
            <div className="content">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp 
