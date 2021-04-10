import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './global-styles'
import { App } from './app';
import { FirebaseContext } from './context/firebase'

// const config = {
//     apiKey: "AIzaSyBYWxKqL4Mzu8qgRmmoKclMURjVBOV4qjU",
//     authDomain: "netflix-clone-519b2.firebaseapp.com",
//     databaseURL: "https://netflix-clone-519b2-default-rtdb.firebaseio.com",
//     projectId: "netflix-clone-519b2",
//     storageBucket: "netflix-clone-519b2.appspot.com",
//     messagingSenderId: "385541370519",
//     appId: "1:385541370519:web:b78c5cb965f8cdb72defd2",
//     measurementId: "G-C7V454FW4K"
// }

// const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);