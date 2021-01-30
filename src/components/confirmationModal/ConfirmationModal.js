import React from 'react'
import Button from './Button/Button'
import styles from './ConfirmationModal.module.css'

function ConfirmationModal({ action }) {
    return (
        <div className={styles.modal}>
            <Button
                label="Cancel"
                onClick={() => action(false)}
            />
            <Button
                label="Delete"
                color="warning"
                onClick={() => action(true)} />
        </div>
    )
}

export default ConfirmationModal
