import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { BranchInterface, internationalBranchInfo } from '../data/branch.international.data'

const network = () => {
    return (
        <Network />
    )
}

export default network

const Network = () => {
    return (
        <div>
            <div className='shadow-sm  overflow-hidden min-h-[50vh]  z-0 bg-center bg-cover' style={{ backgroundImage: 'url(/wallpaper/walpaper.jpg)' }}>
                <div className='text-white  pt-48 pb-28 h-[10h] px-2 md:px-24  bg-black bg-opacity-60 w-full flex  justify-center items-center '>
                    <div className='grid grid-cols-2 items-start w-full'>
                        <div className='justify-self-start'>
                            <p><span><Link href={'/'}>Home</Link></span> > <span className='text-orange-500'>Network</span></p>
                            <p className='text-4xl font-bold'>Network Hub</p>
                        </div>
                    </div>
                </div>
            </div>
            <Section1 />
            <Section2 />
        </div>
    )
}
const Section1 = () => {
    const [singleIntBranchData, setSingleIntBranchData] = useState<BranchInterface>(internationalBranchInfo[0])
    const selectSingleBranch = (current: BranchInterface) => {
        setSingleIntBranchData(current);
    }
    return (
        <div className='my-10 py-10 font-work-sans'>
            <div className='container  mx-auto px-20'>
                <div className='grid grid-cols-12 gap-x-3'>
                    <div className='col-span-4'>
                        <div className='border px-10 py-5 bg-gray-900 text-white'>
                            <p className='text-xl font-bold font-work-sans my-2'>Our International branches</p>
                            <ul className='pl-4 pr-16'>
                                {
                                    internationalBranchInfo.map((current, index) => {
                                        return (
                                            <li key={index} onClick={() => selectSingleBranch(current)} className=' py-2 hover:text-orange-500 hover:bg-slate-900 hover:shadow-md cursor-pointer relative ani before:content-[""] before:hover:text-orange-500 before:hover:bg-orange-500 before:hover:animate-wiggle before:absolute  before:w-[100%] before:h-[2px] before:bottom-0'><a className='text-base font-bold font-work-sans'>{current.country}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-8'>
                        <div className='border-2 bg-slate-100 shadow-lg pb-5 font-work-sans'>
                            <div className='text-center'>
                                <p className='text-2xl font-bold py-2 bg-gray-900 text-white'><span className="">{singleIntBranchData.country}</span></p>
                            </div>

                            <div className='container mx-auto px-5'>
                                <p className='text-orange-600 py-2'>Idealcourier.com.np</p>
                                <div className='grid grid-cols-2 pb-2 gap-x-2 gap-y-3'>
                                    <BranchCard img="/icon/network/user.png" type='Name' obj={singleIntBranchData.name} />
                                    <BranchCard img="/icon/network/pin.png" type='Address' obj={singleIntBranchData.address} />
                                    <BranchCard img="/icon/network/call.png" type='Contact' obj={singleIntBranchData.telephone} />
                                    <BranchCard img="/icon/network/extension.png" type="Extension" obj={singleIntBranchData.telephoneExtension} />
                                    <BranchCard img="/icon/network/gmail.png" type='Mail' obj={singleIntBranchData.mail} />
                                    <BranchCard img="/icon/network/fax-machine.png" type='Fax' obj={singleIntBranchData.fax} />
                                    <BranchCard img="/icon/network/world-wide-web.png" type='Website' obj={singleIntBranchData.website} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BranchCard = ({ obj, type, img }: { obj: any, type: string, img: string }) => {
    return (
        <div className='border-l-4 p-3 bg-gray-800 text-white border-l-orange-600 font-bold text-base font-work-sans gap-2 '>
            <div className='flex items-start flex-wrap gap-2'>
                <img src={img} className='w-5 h-5' alt="" />
                <p className=' font-bold items-center text-base'>{type}:</p>
            </div>
            <p className='pl-6 text-justify pt-2 text-xs  '>{obj}</p>
        </div>
    )
}


const Section2 = () => {
    const [singleIntBranchData, setSingleIntBranchData] = useState<BranchInterface>(internationalBranchInfo[0])
    const selectSingleBranch = (current: BranchInterface) => {
        setSingleIntBranchData(current);
    }
    return (
        <div className='font-work-sans'>
            <div className='container  mx-auto px-20'>
                <div className='grid grid-cols-12 gap-x-3'>
                    <div className='col-span-4'>
                        <div className='border px-10 py-5 bg-gray-900 text-white'>
                            <p className='text-xl font-bold font-work-sans my-2'>Our Regional branches</p>
                            <ul className='pl-4 pr-16'>
                                {
                                    internationalBranchInfo.map((current, index) => {
                                        return (
                                            <li key={index} onClick={() => selectSingleBranch(current)} className=' py-2 hover:text-orange-500 hover:bg-slate-900 hover:shadow-md cursor-pointer relative ani before:content-[""] before:hover:text-orange-500 before:hover:bg-orange-500 before:hover:animate-wiggle before:absolute  before:w-[100%] before:h-[2px] before:bottom-0'><a className='text-base font-bold font-work-sans'>{current.country}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-8'>
                        <div className='border-2 bg-slate-100 shadow-lg pb-5 font-work-sans'>
                            <div className='text-center'>
                                <p className='text-2xl font-bold py-5 bg-gray-900 text-white'><span className="">{singleIntBranchData.country}</span></p>
                            </div>

                            <div className='container mx-auto px-5'>
                                <p className='text-orange-600 py-2'>Idealcourier.com.np</p>
                                <div className='grid grid-cols-2 pb-2 gap-x-2 gap-y-3'>
                                    <BranchCard img="/icon/network/user.png" type='Name' obj={singleIntBranchData.name} />
                                    <BranchCard img="/icon/network/pin.png" type='Address' obj={singleIntBranchData.address} />
                                    <BranchCard img="/icon/network/call.png" type='Contact' obj={singleIntBranchData.telephone} />
                                    <BranchCard img="/icon/network/extension.png" type="Extension" obj={singleIntBranchData.telephoneExtension} />
                                    <BranchCard img="/icon/network/gmail.png" type='Mail' obj={singleIntBranchData.mail} />
                                    <BranchCard img="/icon/network/fax-machine.png" type='Fax' obj={singleIntBranchData.fax} />
                                    <BranchCard img="/icon/network/world-wide-web.png" type='Website' obj={singleIntBranchData.website} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            title: 'Our Network | Ideal Courier'
        },
    }
}