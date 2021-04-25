import React, { useState, useContext } from 'react'

import { OptForm } from '../components'
import { FirebaseContext } from '../context/firebase'

export default function OptFormPage() {
    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('')

    var actionCodeSettings = {
        url: 'https://netflix-clone-firebase.netlify.app/browse',
        handleCodeInApp: true
      };

    const handleSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .sendSignInLinkToEmail(emailAddress, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', emailAddress);
            })
    }

    return (
        <OptForm onSubmit={handleSignin} method="POST">    
            <OptForm.Input 
                type="email" 
                placeholder="Email Address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
            />
            <OptForm.Button type="Submit">Try it now</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart
            your membership.</OptForm.Text>
        </OptForm>
    )
}