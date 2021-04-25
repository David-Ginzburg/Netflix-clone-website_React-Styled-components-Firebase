import React, { useContext, useEffect } from 'react'

import { Feature } from '../components'
import { JumbotronContainer, FooterContainer, AccordionContainer, HeaderContainer } from '../containers'
import OptFormLink from '../pages/optForm'
import { FirebaseContext } from '../context/firebase'


export default function Home() {
    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        const email = window.localStorage.getItem('emailForSignIn');
        if (email) {
        firebase.auth().signInWithEmailLink(email, window.location.href)
            .then((result) => {
                window.localStorage.removeItem('emailForSignIn')
                result.user
                .updateProfile({
                    displayName: result.user.email,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [firebase])

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptFormLink />
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}