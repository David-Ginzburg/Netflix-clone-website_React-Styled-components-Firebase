import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './global-styles'
import { App } from './app'
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyC7-nHriidtpR2PhJKde36Ty4i5_nR5gLI",
    authDomain: "netflix-clone-c5907.firebaseapp.com",
    databaseURL: "https://netflix-clone-c5907-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-clone-c5907",
    storageBucket: "netflix-clone-c5907.appspot.com",
    messagingSenderId: "1056731974806",
    appId: "1:1056731974806:web:2c47cd546e18a1f01f46b7"
}

window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
)