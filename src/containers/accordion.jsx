import React from 'react'

import { Accordion } from '../components'
import OptFormLink from '../pages/optForm'
import faqsData from '../fixtures/faqs.json'

export default function AccordionContainer () {
    return (
        <Accordion>
            <Accordion.Title>Freequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            <OptFormLink />
        </Accordion>
    )
}