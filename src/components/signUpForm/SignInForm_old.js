// import React from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
// import { Link, Redirect } from 'react-router-dom'
// import { TextInput } from '../TextInput'
// import './signUpForm/SignUpForm.css'
// import { useAuthentication } from '../../hooks/authentication'

// export const SignInForm = () => {

//     const { ...methods } = useForm()
//     const { login, user } = useAuthentication()

//     const onSuccess = ({ email, password }) => {
//         login(email, password)
//     }

//     const onError = (errorList) => {
//         console.log(errorList)
//     }

//     return (
//         <>
//             {user ? (
//                 <Redirect to={'/my-demos'} />
//             ) : (
//                     <FormProvider {...methods} >
//                         <form className="dropit-form" onSubmit={methods.handleSubmit(onSuccess, onError)}>
//                             <h3>Sign In</h3>
//                             <TextInput
//                                 type="text"
//                                 label="E-mail *"
//                                 name="email"
//                                 fieldRef={methods.register({
//                                     required: "Your e-mail address is required",
//                                     pattern: {
//                                         value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                                         message: "Invalid e-mail address"
//                                     }
//                                 })}
//                             />
//                             <TextInput
//                                 type="password"
//                                 label="Password *"
//                                 name="password"
//                                 fieldRef={methods.register({
//                                     required: {
//                                         value: true,
//                                         message: "Enter your password"
//                                     }
//                                 })}
//                             />
//                             <button type="submit">Sign In</button>
//                             <p className="small-text card">New to dropit? <Link to="/sign-up"> Create an account</Link></p>
//                         </form>
//                     </FormProvider>
//                 )}
//         </>
//     )
// }
