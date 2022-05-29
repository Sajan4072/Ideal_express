import { GetServerSideProps } from 'next'
import React from 'react'

const dashboard = () => {
    return (
        <Dashboard />
    )
}

export default dashboard

const Dashboard = () => {
    return (
        <div>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: 'dashboard'
        }
    }
}