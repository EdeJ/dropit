import React from 'react'
import { ReactComponent as LoaderIcon } from '../../assets/images/loading.svg'
import styles from './Spinner.module.css'

function Spinner({ message = 'loading...' }) {

    return (
        <div className={styles['spinner']}>
            <LoaderIcon />
            <p>{message}</p>
        </div>
    )
}

export default Spinner
