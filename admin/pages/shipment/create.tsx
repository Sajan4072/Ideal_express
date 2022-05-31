import { GetServerSideProps } from 'next'
import React from 'react'
import Form from '../../components/shipment/Form'
import Container from '../../layouts/Container'
import { IoIosCreate } from 'react-icons/io'

const create = () => {
    return (
        <Create />
    )
}

export default create

const Create = () => {
    return (
        <Container title='Create Shipment' icon={<IoIosCreate size={25} />} >
            <Form edit={false} />
        </Container>


    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: '/shipment/ceate',
            title: 'Create Shipment'
        }
    }
}