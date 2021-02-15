import React from 'react'
import LinkButtonStyle from '../../components/linkButtonStyle/LinkButtonStyle'

import styles from './TermsOfService.module.css'

function TermsOfService() {

    return (
        <div className="page">
            <div className="content">
                <h3>Terms Of Service</h3>
                <p className={styles['small-text']}>
                    By using this app you grant me a non-transferable option to claim,
                    for now and for ever more, your immortal soul.
                    Should I wish to exercise this option, you agree to surrender your immortal soul,
                    and any claim you may have on it, within 5 (five) working days of receiving written notification from dropit.com or one of its duly authorized minions.
            </p>
                <LinkButtonStyle url="/sign-up">Sign up</LinkButtonStyle>
            </div>
        </div>
    )
}

export default TermsOfService 
