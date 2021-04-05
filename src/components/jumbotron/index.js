import React from 'react'

import { Item, Inner, Container, Pane, Title, Subtitle, Image } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronContainer({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.Subtitle = function JumbotronContainer({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>;
}

Jumbotron.Image = function JumbotronContainer({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}