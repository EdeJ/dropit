import React, { useEffect } from 'react'
import { SignUpForm } from '../components/signUpForm/SignUpForm';


function SignUp({ setShowPlayer }) {

    useEffect(() => {
        setShowPlayer(false);
    }, [setShowPlayer])

    return (
        <div className="page">
            <div className="content">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp 
