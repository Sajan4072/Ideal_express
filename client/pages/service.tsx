import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { prohibitedData, ProhibitedInterface } from '../data/prohibited.data'
import { Options, serviceData, serviceInterface } from '../data/service.data'

const service = () => {
    return (
        <Service />
    )
}
export default service

const Service = () => {
    return (
        <div>
            <div className='shadow-sm  overflow-hidden min-h-[50vh]  z-0 bg-center bg-cover' style={{ backgroundImage: 'url(/wallpaper/walpaper.jpg)' }}>
                <div className='text-white  pt-48 pb-28 h-[10h] px-2 md:px-24  bg-black bg-opacity-60 w-full flex  justify-center items-center '>
                    <div className='grid grid-cols-2 items-start w-full'>
                        <div className='justify-self-start'>
                            <p><span><Link href={'/'}>Home</Link></span> > <span className='text-orange-500'>service</span></p>
                            <p className='text-4xl font-bold'>Services</p>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
            <SectionProhibited />
        </div>
    )
}

const Section2 = () => {

    return (
        <div className='bg-slate-100'>
            <div className='py-5 container mx-auto px-5'>
                <div className='text-center my-10'>
                    <p className='text-3xl font-bold'>Our logistic service</p>
                </div>
                {serviceData.map((current: serviceInterface, index: number) => {
                    return (
                        <>
                            <div key={index} className='my-5 py-2 px-5 border rounded-sm border-transparent bg-orange-500 border-l-orange-700  border-l-8'>
                                <p className='capitalize text-white text-xl font-bold '>{current.theme}</p>
                            </div>
                            <div className='grid grid-cols-2 gap-5 my-3'>
                                {
                                    current.options.map((data: Options, index2: number) => {
                                        return (
                                            <div key={index2} className='border bg-white rounded-md shadow-md p-8 '>
                                                <div className='flex py-3 justify-center'> <img src={data.icon} className='h-28 w-32' alt="" /></div>
                                                <div className='text-center'>
                                                    <p className='text-2xl font-bold'>{data.title}</p>
                                                    <p className='text-base text-gray-500'>{data.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}



const SectionProhibited = () => {
    return (
        <div className='py-10 bg-gray-50'>
            <div className='container mx-auto px-5'>
                <div className='text-center w-2/3 mx-auto'>
                    <p className='text-3xl font-bold py-5'>PROHIBITED ITEMS IN CARGO</p>
                    <p className='text-gray-500 py-3 text-sm'>The following restrictions apply to all services offered on our website. However, it is highly advisable to also check the policy of your chosen carrier as further restrictions may apply.
                        We also recommend that you check with customs at the destination country that you wish to send to, as each country has different policies as to what will be accepted into the country. If you are in any doubt, please contact our customer services team.
                    </p>
                </div>
                <div className='grid grid-cols-6 gap-1'>
                    {
                        prohibitedData.map((current: ProhibitedInterface, index: number) => {
                            return (
                                <div key={index} className=' border rounded-md   cursor-pointer hover:shadow-2xl bg-white  p-2 '>
                                    <div className='flex py-3 justify-center'>
                                        <img className='' src={current.icon} alt={current.title} />
                                    </div>
                                    <div className='text-center pt-4 pb-2 '>
                                        <h3 className='text-xl font-extrabold text-red-600 font-poppin cursor-text'>{current.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            title: 'Service Page | Ideal Courier'
        },
    }
}