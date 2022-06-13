import React from 'react'
import Container from '../../layouts/Container'

const index = () => {
    return (
        <Branch />
    )
}

export default index

const Branch = () => {
    return (
        <Container title='Branch'>
            <div>
                Branch info over here
            </div>
        </Container>
    )
}