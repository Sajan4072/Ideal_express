import type { GetServerSideProps, NextPage } from 'next'
import { MenuData } from '../data/routing.data'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <HomePage />
  )
}
export default Home
const HomePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Section1 setShowModal={setShowModal} />
      <Section2 />
      <Section3 />
      <RequestQuote />
      <Section4 />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}
const Section1 = ({ setShowModal }: { setShowModal: (set: boolean) => void }) => {
  return (
    <div>
      <div className='shadow-sm  overflow-hidden min-h-[100vh]  z-0 bg-center bg-cover' style={{ backgroundImage: 'url(/wallpaper/walpaper.jpg)' }}>
        <div className='text-white  pt-28 h-[10h] px-2 md:px-24  bg-black bg-opacity-80 w-full flex  justify-center items-center '>
          <div className='w-full text-center'>
            <p className='md:text-3xl text-3xl my-8 font-bold'>Discover a better Logistic service with IDEAL EXPRESS</p>
            <p className='text-2xl  mb-4'><span>Track your goods</span></p>

            <div className='flex justify-center pb-8 items-center flex-wrap'>
              <div className='py-8 px-3 md:w-40 w-32 bg-white flex flex-col items-center text-center text-black'>
                <img src="/icon/motorbike.png" className='w-8 h-18' alt="location" />
                <p className='mt-2'>Rate and ship</p>
              </div>
              <div className='py-10 px-5 flex flex-col items-center w-30 md:w-40 bg-orange-500   text-black'>
                <img src="/icon/delivery.png" className=' w-8 h-18' alt="location" />
                <p className='mt-2 text-white'>Track</p>
              </div>
              <div className='py-8 px-3 md:w-40 w-32  bg-white flex flex-col items-center text-center text-black'>
                <img src="/icon/location.png" className=' w-8 h-18' alt="location" />
                <p className='mt-2'>Location</p>
              </div>
            </div>
            <div className='w-full '>
              <input title='input' type="text" placeholder='Ex 1234565' className='rounded-l-sm text-gray-500  font-sm  focus:outline-none px-3 py-4 w-[70%] md:w-1/3 ' />
              <button onClick={() => setShowModal(true)} className='px-4  py-4 bg-orange-500 text-white rounded-r-sm  font-bold'><i className="fi fi-rr-search text-sm mr-1"></i><span>Track</span></button>
            </div>
            <div className='hidden md:grid grid-cols-3 md:grid-cols-7 mt-10 items-center'>
              <p className='p-3 bg-white rounded-sm cursor-pointer text-black font-semibold'>our service</p>
            </div>
            <div className='hidden md:grid  grid-cols-4 gap-x-1 mt-10 items-end'>
              <div className='h-44 cursor-pointer flex items-center justify-center bg-orange-700 '>our service</div>
              <div className='h-40 cursor-pointer flex items-center justify-center bg-black bg-opacity-30 '>our service</div>
              <div className='h-40 cursor-pointer flex items-center justify-center bg-black bg-opacity-30 '>our service</div>
              <div className='h-40 cursor-pointer flex items-center justify-center bg-black bg-opacity-30 '>our service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Section2 = () => {
  return (
    <div className='bg-white container'>
      <div className='my-10 md:mx-16 mx-3'>
        <div className='   text-left grid grid-cols-12'>
          <div className='md:col-span-5 col-span-12'>
            <p className='text-orange-500 font-roboto mb-3  font-bold col-span-3'>Your Package, Your Rules</p>
            <p className='text-2xl font-bold font-work-sans'>We Continue To Pursue That Same Vision In Today&apos; Complex, Uncertain World, Working Every Day</p>
          </div>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2 mt-10'>
          {
            [0, 0, 0, 0, 0, 0].map((data, index) => {

              return (
                <div key={index} className='border p-3 rounded-md cursor-pointer group hover:border-orange-500'>
                  <div>
                    <img src="/icon/credit-card.png" className='w-10 group-hover:animate-bounce h-18' alt="" />
                  </div>
                  <div>
                    <p className='group-hover:text-orange-500 text-gray-800 text-lg font-roboto mb-2 mt-3  font-bold col-span-3'>Transparent Price</p>
                  </div>
                  <div>
                    <p className='text-base text-gray-400 '>The world of international supply chains involves a myriad of unknown risks and challenging regulations.</p>
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


const Section3 = () => {
  interface dataInterface {
    icon: string,
    count: number,
    title: string;
  }
  const dataFor: dataInterface[] = [
    {
      icon: '',
      count: 445678,
      title: 'SHIPMENTS COMPLETED'
    },
    {
      icon: '',
      count: 240,
      title: 'DESTINATIONS'
    },
    {
      icon: '',
      count: 45,
      title: 'LOCAL PARTNERS'
    },
    {
      icon: '',
      count: 7,
      title: 'YEARS OF EXPERIENCE'
    }
  ]
  const [data, setData] = useState<dataInterface[] | never[]>(dataFor)
  const handleFocus = () => {

  }
  return (
    <div onFocus={handleFocus} className='bg-center bg-cover bg-fixed   relative' style={{ backgroundImage: 'url("/bg/bgsection3.jpg")' }}>
      <div className='pt-16 bg-black bg-opacity-50'>
        <div className="container mx-auto px-5 text-white ">
          <div className='mt-5 w-1/2 relative'>
            <div className=' before:w-[5.8rem] before:-left-2 before:-bottom-2 before:-top-2 before:-right-12 before:hover:animate-none before:absolute before:animate-pulse2  before:rounded-full before:border-2 before:border-orange-600 cursor-pointer p-1 w-[13%] rounded-full border-2 relative border-orange-600'>
              <i className="    rounded-full px-[1.55rem] py-4 text-white bg-orange-600 text-2xl fa fa-play" aria-hidden="true"></i>
            </div>
          </div>
          <div className='grid grid-cols-2 py-10'>
            <div className=''>
              <p className='text-base font-work-sans'>Your Package, Your Rules</p>
              <p className='text-4xl font-bold mt-5 font-work-sans'>Digital Freight That Saves Your Time!</p>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-y-8 gap-x-5'>
                {data.map((current, index) => {
                  return (
                    <div key={index} className='justify-self-center'>
                      <div className='flex justify-center'><img src="/icon/global64px.png" alt="" /></div>
                      <div className='flex mt-2 items-center flex-col gap-2'>
                        <p className='text-3xl font-bold'>{current.count}<span className='pl-1'>+</span></p>
                        <p className='text-xl'>{current.title}</p>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Modal = ({ showModal, setShowModal }: { showModal: boolean, setShowModal: (set: boolean) => void }) => {
  return (
    <div className={`${showModal ? 'fixed' : 'hidden'} animate-modal font-poppin inset-0 bg-black bg-opacity-90 min-h-[80vh]  z-50`}>
      <div className='flex justify-center h-[100vh] items-center'>
        <div className='border w-2/3 border-white p-6 text-white relative'>
          <i onClick={() => setShowModal(false)} className="text-white fa fa-times absolute -right-2  text-2xl cursor-pointer -top-4"></i>
          <div className='flex justify-between'>
            <p className='text-white text-xl font-bold '>Ideal Tracking</p>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white text-base px-8 py-2 rounded-md bg-gray-900 font-bold '>Print</button>
          </div>
          <div className='bg-orange-600 rounded-md my-4 p-2'>
            <p className='text-white text-base font-bold text-center'>Shipment Status</p>
          </div>
          <div className='my-3'>
            <p className='border-transparent border-b text-base font-bold text-white pb-2'>Shipping Information</p>
          </div>
          <div className=' bg-gray-900 p-3 rounded-md'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Origin:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Package:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Destination:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Type of Shipment:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Weight:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Shipment Mode:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
              <div className='col-span-12'>
                <div className='flex '>
                  <p className='text-sm font-bold mr-2'>Carrier Reference No:</p>
                  <p className='text-sm'>afdas</p>
                </div>
              </div>
            </div>
          </div>
          <div className='my-3'>
            <p className='border-transparent border-b text-base font-bold text-white pb-2'>Shipping History</p>
          </div>
          <table className="table-auto w-full rounded-md bg-gray-900">
            <thead>
              <tr className="bg-green-700 text-center text-base">
                <th
                  className="">
                  Sn
                </th>
                <th
                  className="">
                  TLD
                </th>
                <th
                  className="">
                  Duration
                </th>
                <th
                  className="">
                  Registration
                </th>
                <th
                  className="">
                  Renewal
                </th>
                <th
                  className="">
                  Transfer
                </th>
                <th
                  className="">
                  Register
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center text-sm'>
                <td>1</td>
                <td>asfd</td>
                <td>asfd</td>
                <td>asfd</td>
                <td>asfd</td>
                <td>asfd</td>
                <td>asfd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const RequestQuote = () => {
  return (
    <div className='bg-slate-100 relative '>
      <div className='container mx-auto px-10  pb-5'>
        <div className='flex -mt-[3.5rem] absolute     z-10'>
          <div className='py-4 px-6 font-sm font-bold text-white bg-orange-500'>Request A Quote</div>
          <div className='py-4 px-6 bg-black bg-opacity-30 font-bold text-white'>
            <p className='text-white'>Track and Trace</p>
          </div>
        </div>
        <div className='bg-white px-12 py-3'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8'>
              <div>
                <p className='text-base font-bold'>Personal data</p>
                <div className='grid grid-cols-3 gap-3 pt-2'>
                  <div>
                    <input title='name' type="text" placeholder='Name' className='placeholder:text-gray-400  px-3 py-2 w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                  <div>
                    <input title='name' type="text" placeholder='Email' className='placeholder:text-gray-400 px-3 py-2 w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                  <div>
                    <input title='name' type="text" placeholder='Phone' className='placeholder:text-gray-400 px-3 py-2 w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                </div>
              </div>

              <div className='pt-2'>
                <p className='text-base font-bold'>Personal data</p>
                <div className='grid grid-cols-3 gap-3 pt-2'>
                  <div>
                    <input title='name' type="text" className='px-3 py-2 rounded-sm w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                  <div>
                    <input title='name' type="text" className='px-3 py-2 rounded-sm w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                  <div>
                    <input title='name' type="text" className='px-3 py-2 rounded-sm   w-full focus:outline-none hover:border-orange-600 border border-gray-300' />
                  </div>
                </div>
              </div>
              <div className='pt-2'>
                <button type='button' className='w-full text-white bg-black hover:bg-gray-900 p-3'>Request A quote</button>
              </div>
            </div>
            <div className='col-span-4 bg-orange-500 mx-5'>
              <div className='text-center  py-2  text-white px-5'>
                <p className='text-2xl font-bold my-3'>
                  How can we help you
                </p>
                <p className='mb-3 font-xs'>We Understand the importance approaching each work integrally and believe in the power of simple and easy communication </p>
                <button className='px-3 py-2 rounde-sm text-center bg-black text-white'>contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section4 = () => {
  interface OfferInterface {
    icon: string;
    title: string;
    description: string;
  }
  const data: OfferInterface[] =
    [
      {
        icon: 'box.png',
        title: 'PICKUP AND PACKING',
        description: 'Our Packing and pickup facilities allows customers hassle free shipment solutions'
      },
      {
        icon: 'best-price.png',
        title: 'AFFORDABLE PRICE',
        description: 'We provide cheapest price ever for international and national courier both'
      },
      {
        icon: 'order-tracking.png',
        title: 'TRACKING SERVICE',
        description: 'We provide you instant updates of the progress of the transportation of goods.'
      }
    ]
  return (
    <div className='bg-orange-600'>
      <div className='container text-white mx-auto p-10 '>
        <div className='grid grid-cols-2'>
          <div>
            <h2 className='text-2xl font-bold'>WHAT MAKES US SPECIAL</h2>
          </div>
          <div>
            <p className='px-5 text-justify'>We are ready to give solutions tailored to the customer needs and requirements. To confirm elevated precision in our services, we have developed a complete infrastructure required to handle both national and international delivery of shipments. .</p>
          </div>
        </div>
        <div className='grid grid-cols-3 my-8 gap-8'>
          {
            data.map((current, index) => {
              return (
                <div key={index} className=' shadow-2xl bg-[#c94400] px-3 py-8  rounded-sm'>
                  <div className='grid justify-center my-2'>
                    <img alt="packaging" src={`/icon/offer/${current.icon}`} className="w-100" />
                  </div>
                  <div className='text-center'>
                    <h1 className='text-2xl mb-2'>{current.title}</h1>
                    <p>{current.description}</p>
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
      title: 'Home Page | Ideal Courier'
    },
  }
}