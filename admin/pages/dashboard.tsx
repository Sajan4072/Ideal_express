import { GetServerSideProps } from 'next'
import React from 'react'
import { sidebarData } from '../datas/sidebar.data'

const dashboard = () => {
    return (
        <Dashboard />
    )
}

export default dashboard

const Dashboard = () => {
    return (
        <div className='py-5'>
            <div className='grid-cols-4 grid justify-between gap-2'>
                {
                    sidebarData.map((data, index) => {
                        return (
                            <a key={index} href="#" className="block p-6 max-w-sm odd:bg-gray-600  even:bg-orange-600 first-of-type:bg-purple-500 last-of-type:bg-green-800    rounded-lg border  hover:bg-gray-900 ">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{data.title}</h5>
                                <p className="font-normal text-white">{data.icon}</p>
                            </a>
                        )
                    })
                }
            </div>
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