import React from 'react'
import Button from '../button/Button'
import styles from './ConfirmationModal.module.css'

function ConfirmationModal({ message, action }) {
    return (
        <div className={styles['modal']}>
            <h3>{message}</h3>
            <div>
                <Button
                    label="Cancel"
                    onClick={() => action(false)}
                />
                <Button
                    label="Ok"
                    onClick={() => action(true)}
                />
            </div>
        </div>
    )
}

export default ConfirmationModal
