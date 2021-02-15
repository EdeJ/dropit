import React from 'react'
// import loaderIcon from '../../assets/images/loading-1.svg'
import { ReactComponent as LoaderIcon } from '../../assets/images/loading-1.svg'
import styles from './Spinner.module.css'

function Spinner() {

    return (
        <div className={styles['spinner']}>
            <LoaderIcon />
            {/* <img src={loaderIcon} alt="loading..." /> */}
            <p>loading...</p>
        </div>
    )
}

export default Spinner
