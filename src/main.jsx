import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './global-styles'
import { App } from './app'
import { FirebaseContext } from './context/firebase'

import "firebase/compat/auth";
import compatApp from "firebase/compat/app";

const { VITE_API_KEY, VITE_APP_ID, VITE_AUTH_DOMAIN, VITE_DATABASE_URL, VITE_MESSAGING_SENDER_ID, VITE_PROJECT_ID, VITE_STORAGE_BUCKET } = import.meta.env

const config = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    databaseURL: VITE_DATABASE_URL,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID
}

const app = compatApp.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: app }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
)