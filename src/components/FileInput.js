// import React from 'react'
// import { useFormContext } from 'react-hook-form'
// import styles from './TextInput.module.css'

// function FileInput({ name, label, type, fieldRef }) {

//     const { errors } = useFormContext()

//     return (
//         <div className={styles['input-section']}>
//             <label htmlFor={name}>{label}</label>
//             <input
//                 className={errors[name] ? styles['error'] : ''}
//                 type={type}
//                 id={name}
//                 name={name}
//                 ref={fieldRef}
//             />
//             {errors[name] &&
//                 <p className={styles['error-message']}>
//                     {errors[name].message}
//                 </p>
//             }
//         </div>
//     )
// }

// export default FileInput