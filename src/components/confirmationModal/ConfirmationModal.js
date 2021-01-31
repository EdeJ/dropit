import React from 'react'
import Button from '../Button/Button'
import styles from './ConfirmationModal.module.css'

function ConfirmationModal({ message, action }) {
    return (
        <div className={styles.modal}>
            <h3>{message}</h3>
            <div>
                <Button
                    label="Cancel"
                    onClick={() => action(false)}
                />
                <Button
                    label="Delete"
                    color="warning"
                    onClick={() => action(true)}
                />
            </div>
        </div>
    )
}

export default ConfirmationModal
