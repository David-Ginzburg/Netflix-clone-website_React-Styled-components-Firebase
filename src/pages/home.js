import React from 'react'

import { OptForm, Feature } from '../components'
import { JumbotronContainer, FooterContainer, AccordionContainer, HeaderContainer } from '../containers'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptForm>    
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}