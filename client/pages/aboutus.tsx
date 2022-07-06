import Link from 'next/link'
import React from 'react'
const aboutus = () => {
    return (
        <Aboutus />
    )
}

export default aboutus

const Aboutus = () => {
    return (
        <div>
            <div className='shadow-sm  overflow-hidden min-h-[50vh]  z-0 bg-center bg-cover' style={{ backgroundImage: 'url(/wallpaper/walpaper.jpg)' }}>
                <div className='text-white  pt-48 pb-28 h-[10h] px-2 md:px-24  bg-black bg-opacity-60 w-full flex  justify-center items-center '>
                    <div className='grid grid-cols-2 items-start w-full'>
                        <div className='justify-self-start'>
                            <p><span><Link href={'/'}>Home</Link></span> | <span className='text-orange-500'>contactus</span></p>
                            <p className='text-4xl font-bold'>About us</p>
                        </div>
                    </div>
                </div>
            </div>
            <Introduction />
            <MissionVision />
            <Achievement />
            <Partner />
        </div>
    )
}

const Introduction = () => {

    return (
        <div className='py-5 container px-5 mx-auto ' >
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>

                </div>
                <div className="col-span-8">
                    <div>
                        <h1 className='font-bold text-3xl my-2' >Who are we</h1>
                        <p className='text-gray-500 text-justify py-2'><span className='text-black font-bold'>Ideal Courier Services P. Ltd.</span> is a courier company, Established in 2014 , Head office at Kathmandu, Nepal with group of expert, our aim is to provide the best international and national courier service to our various clients at affordable price. Each courier works to a timetable, within an exclusive territory. Customers of Ideal Courier Services P. Ltd.  are invited to deal with their courier on a first name basis, and full contact details and timetable scheduling are provided.</p>
                        <p className='text-gray-500 text-justify'>Ideal Courier Services P. Ltd. is an international Company, that offers fast, reliable, time definite express delivery on a global scale, Expedited surface and air charter delivery of time critical freight shipment, Business to business ground , small-package delivery, Expiated over night delivery, freight services, customs clearance & integrated information and logistic solution</p>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    )
}

const Achievement = () => {
    return (
        <div className='container mx-auto px-5 my-2' id="div">
            <div className='grid grid-cols-12'>
                <div className='col-span-8'>
                    <div>
                        <h1 className='font-bold text-3xl my-2'>Our Achievement</h1>
                        <p className='text-gray-500 text-justify'>We feel proud to be official Courier partner for VISIT NEPAL 2020 , affiliated with Nepal Tourism Board</p>
                    </div>
                </div>
                <div className='col-span-4'>
                    <img src="/achievement/achievement.png" alt="" />
                </div>
            </div>

        </div>
    )
}


const MissionVision = () => {
    interface MissionVissionInterface {
        title: string;
        symbol: string;
        description: string;
    }
    const data: MissionVissionInterface[] =
        [{
            title: 'OUR MISSION',
            symbol: 'M',
            description: 'To offer practical , cost effective and innovative freight management solution through our ambitious team that comprises of our staff management and network partners.'
        }, {
            title: 'OUR VISION',
            symbol: 'V',
            description: 'To be recognized as a quality operator in the domestic and global logistics arena by operation total logistics solution to meet our customer demand work towards improving customer satisfaction, stable growth and profitability.'
        }, {
            title: 'ASSOCIATED WITH',
            symbol: 'A',
            description: 'We are happy to be the part of Courier Service Association of Nepal (COSAN)'
        }]
    return (
        <div className='bg-[#c64300]'>
            <div className='py-16 container px-5 mx-auto text-white'>
                <div className='grid grid-cols-3 gap-10 '>
                    {data.map((current, index) => {
                        return (
                            <div key={index} className='flex gap-5'>
                                <div>
                                    <p className='text-xl border border-gray-400 px-3 py-2  shadow-xl'>{current.symbol}</p>
                                </div>
                                <div>
                                    <h1 className='text-lg font-bold'>{current.title}</h1>
                                    <p className='text-justify my-1'>{current.description}</p>
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

const Partner = () => {
    interface PartnerInterface {
        image: string;
        name: string;
        address: string;
        link: string;
    }
    const partnerData: PartnerInterface[] = [
        {
            image: 'partner1.png',
            name: "Budget Courier Pvt ltd",
            link: 'http://budget1.net/',
            address: 'India (Domestics)'
        },
        {
            image: 'partner2.png',
            name: "First Flight Couriers (middle east) L.L.C",
            link: 'https://firstflightme.com/',
            address: 'Middle East , Gulf & Worldwide'
        },
        {
            image: 'partner3.png',
            name: "Farder International Express (FDE)",
            link: 'http://en.fardar.com/',
            address: 'China, Taiwan and Hong Kong'
        }
    ]
    return (
        <div className='bg-slate-200 pt-5' id="myDiv" >
            <div className='container  px-5 border shadow-md  bg-white mx-auto py-10'>
                <h1 className='text-center text-3xl font-bold mb-4'>Our Partner</h1>
                <div className='grid gap-4 grid-cols-3 '>
                    {partnerData.map((current, index) => {
                        return (
                            <div>
                                <div className='flex justify-center'>
                                    <img className='border w-auto p-1 h-20' src={`/partner/${current.image}`} alt="" />
                                </div>
                                <Link href={current.link} ><h1 className='text-2xl text-[#c64300] font-bold text-center py-2'>{current.name}</h1></Link>
                                <p className='text-center'>{current.address}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

