import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaqData, FAQInterface } from '../data/faq.data'
import { MdLocationOn } from 'react-icons/md'
const contactus = () => {
    return (
        <Contactus />
    )
}
export default contactus

const Contactus = () => {
    return (
        <div>
            <div className='shadow-sm  overflow-hidden min-h-[50vh]  z-0 bg-center bg-cover' style={{ backgroundImage: 'url(/wallpaper/walpaper.jpg)' }}>
                <div className='text-white  pt-48 pb-28 h-[10h] px-2 md:px-24  bg-black bg-opacity-60 w-full flex  justify-center items-center '>
                    <div className='grid grid-cols-2 items-start w-full'>
                        <div className='justify-self-start'>
                            <p><span><Link href={'/'}>Home</Link></span> | <span className='text-orange-500'>contactus</span></p>
                            <p className='text-4xl font-bold'>Contact us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-8'>
                <div className='flex justify-center mx-auto w-[45%] pt-6'>
                    <div className='text-center '>
                        <p className='text-orange-500 text-lg font-bold'>Get in touch</p>
                        <p className='text-3xl before:contents[""] font-bold relative before:absolute before:h-1 before:w-1/3 pb-5  before:bottom-0 before: before:bg-orange-600'>Contact us</p>
                        <p className='text-center text-gray-500 text-base mt-8'>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
                    </div>
                </div>
                <div className='w-[60%] mt-5 mx-auto'>
                    <form action="">
                        <div className='grid grid-cols-12 gap-5'>
                            <div className='col-span-6'>
                                <input type="text" placeholder='Name' className='w-full focus:outline-none focus:border py-3 border border-slate-300 px-3 focus:border-orange-500 focus:rounded-sm' title='input' />
                            </div>
                            <div className='col-span-6'>
                                <input type="text" placeholder='email' className='w-full focus:outline-none focus:border py-3 border border-slate-300 px-3 focus:border-orange-500 focus:rounded-sm' title='input' />
                            </div>
                            <div className='col-span-6'>
                                <input type="text" placeholder='phone' className='w-full focus:outline-none focus:border py-3 border border-slate-300 px-3 focus:border-orange-500 focus:rounded-sm' title='input' />
                            </div>
                            <div className='col-span-6'>
                                <input type="text" placeholder='company' className='w-full focus:outline-none focus:border py-3 border border-slate-300 px-3 focus:border-orange-500 focus:rounded-sm' title='input' />
                            </div>
                            <div className='col-span-12'>
                                <textarea placeholder='Enter you message' className='w-full focus:outline-none focus:border py-2 pb-3 border border-slate-300 px-3 focus:border-orange-500 focus:rounded-sm' title='input' />
                            </div>
                            <div className='col-span-12 mx-auto'>
                                <button className='bg-gray-800 rounded-sm hover:bg-orange-600 px-16 text-white  py-3 '>submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <SectionFAQ />
            <ContactCard />
        </div>
    )
}

const SectionFAQ = () => {
    return (
        <div className='font-roboto-condensed mt-10 py-10 bg-slate-200'>
            <div className='container mx-auto px-5'>
                <div className='shadow-lg p-5 w-full bg-white'>
                    <div className='text-4xl text-center my-2'>
                        <p className='font-bold '>FAQ</p>
                    </div>
                    {
                        FaqData.map((current: FAQInterface, index: number) => {
                            return (
                                <FAQCard key={index} index={index} data={current} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const FAQCard = ({ data, index }: { data: FAQInterface, index: number }) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className='border rounded-sm  px-5 pb-4 cursor-pointer ' onClick={() => setShow(!show)}>
            <div className='flex justify-between my-2  '  >
                <p className='text-orange-500 text-base font-bold'>{index + 1}. {data.title}</p>
                <p className={`bg-orange-500 px-2 text-white cursor-pointer text-lg`}>{show ? '-' : '+'}</p>
            </div>
            <div className={`${show ? 'block' : 'hidden'} animate-dropdown `}>
                <p className='text-sm text-gray-500 '>{data.description}</p>
            </div>
        </div>
    )
}


const ContactCard = () => {
    interface ContactCard {
        image: string;
        title: string;
        description: string;
    }
    const cardDate: ContactCard[] = [
        {
            image: 'icon/contactus/location.png',
            title: 'ADDRESS',
            description: 'Head Office: Gaushala Chowk, Battisputali Road (Along with NIC Asia Bank & Nearby Hotel Dwarika), Kathmandu, Nepal'
        },
        {
            image: 'icon/contactus/smartphone.png',
            title: 'PHONE',
            description: '+977-1-4578809, 4478678'
        },
        {
            image: 'icon/contactus/email.png',
            title: 'EMAIL',
            description: '+977-1-4578809, 4478678'
        }
    ]
    return (
        <div className='bg-orange-500 p-12'>
            <h1 className='text-center text-3xl font-bold text-white '>Head Office</h1>
            <div className="grid grid-cols-3 gap-5 justify-items-center pt-12">
                {
                    cardDate.map((current, index) => {
                        return (
                            <div key={index} className=' shadow-lg  rounded-sm p-5 w-96'>
                                <div >
                                    <div className='text-center flex justify-center cursor-pointer'>
                                        <img title='image' src={current.image} className=' hover:scale-110 rounded-full h-20 w-20 p-2 bg-white   text-black' />
                                    </div>
                                    <div className='text-center text-white '>
                                        <h2 className='text-xl font-bold py-2'>{current.title}</h2>
                                        <p className='text-base text-gray-100'>{current.description}</p>
                                    </div>
                                </div>

                            </div>
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
            title: 'Contactus Page | Ideal Courier'
        },
    }
}