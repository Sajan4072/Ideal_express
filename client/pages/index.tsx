import type { NextPage } from 'next'
import { MenuData } from '../data/routing.data'
import {useEffect,useState} from 'react'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <HomePage/>
  )
}

export default Home




const HomePage=()=>{

  return(
     <div>
        <Section1/>
        <Section2/>
        <Footer/>
     </div>
  )
}

const Section1=()=>{
  const [fixnav,setFixnav]=useState(false);

 const handleScrollChange=()=>{
   const position=window.pageYOffset;
    if(position>100){
      setFixnav(true);
    }else{
      setFixnav(false)
    }
}

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange, { passive: true });

    return () => {
        window.removeEventListener('scroll',handleScrollChange);
    };
}, []);
  return(
  <div>
    <div className='shadow-sm   overflow-hidden min-h-[100vh]  z-0 bg-center bg-cover'
     style={{backgroundImage:'url(/wallpaper/walpaper.jpg)'}}>
  <div className=' font-roboto '>
    <div className={`py-2 bg-white ${fixnav?'fixed shadow-md md:py-0 md:bg-white text-black z-50 animate-fadeInDown  ':'md:py-0 md:bg-black text-white md:bg-opacity-50'}  border-b border-transparent`}>
    <div className='grid grid-cols-12  pt-1 px-2 md:px-24'>
        <div className='col-span-6 md:col-span-4 justify-self-start flex justify-items-center justify-start'>
          <div className={`my-1 ${fixnav?'md:w-[80%]':'md:w-[100%]'} w-[100%] cursor-pointer `}>
           <Link href="/" passhref>
            <img src="/logo/logo.png" className='w-full' alt="" />
           </Link>
          </div>
        </div>
        <div className='col-span-6 md:col-span-8 justify-self-end flex justify-center'>
          <div class="md:hidden justify-self-end mt-2">
            <img src="/icon/list.png" className="h-8 w-8" alt="menu" />
          </div>
        <div className={`${fixnav?"":"md:mt-6"} `}>
           <div className={` hidden ${fixnav?'hidden':'md:flex'}  flex-row-reverse gap-x-6`}>
              <div>
                 <a href="" className='p-3 rounded-md hover:bg-orange-500 hover:text-white bg-white text-black text-sm font-bold'><i class="fi fi-br-home"></i><span className='ml-2 '>Branch Login</span></a>
              </div>
              <div className='flex gap-2 items-end text-base'>
                <img src="/icon/email.png" className='h-6 w-6 ' alt="" />
                jitbdrrana8@gmail.com
                </div>    
              <div className='flex gap-2 text-base'>
                 <img src="/icon/telephone.png" className='h-6 w-6 ' alt="" />
                 9807590188
                </div>              
           </div>
          
          <div className={`md:flex hidden ${fixnav?'  mt-8 items-center':'mt-8 items-end'} flex justify-center  relative  gap-x-11`}>
            { MenuData.map((data,index)=>{
             return (
              <div className={`${fixnav?'pb-6':'pb-3'} relative text-base font-bold items-end before:hover:wiggle before:contents['']  before:absolute before:h-[0.15rem] before:bottom-0 before:w-[100%] ${fixnav?"before:hover:bg-black":"before:hover:bg-white"} cursor-pointer before:hover:transition before:hover:duration-[0.8s] before:hover:ease-ease  before:hover:delay-[0s] before:hover:animate-wiggle`}>{data.name}</div>
             )
            })
          }
          </div>
          </div>
        </div>
    </div>
   </div>
      <div className='text-white  h-[10h] px-2 md:px-24  bg-black bg-opacity-50 w-full flex  justify-center items-center '>
                <div className='w-full text-center'>  
                     <p className='md:text-5xl text-3xl my-8 font-bold'>Discover a better Logistic service with IDEAL EXPRESS</p>
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
                    <input title='input' type="text" placeholder='Ex 1234565' className='rounded-l-sm text-gray-500 font-sm  focus:outline-none px-3 py-4 w-[70%] md:w-1/3 ' />
                    <button className='px-4  py-4 bg-orange-500 text-white rounded-r-sm  font-bold'><i class="fi fi-rr-search text-sm mr-1"></i><span>Track</span></button>
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
  </div>
  )
}


const Section2=()=>{
  return(
      <div className='bg-white container'>
       <div className='my-10 md:mx-16 mx-3'>
        <div className='   text-left grid grid-cols-12'>
           <div className='md:col-span-5 col-span-12'>
             <p className='text-orange-500 font-roboto mb-3  font-bold col-span-3'>Your Package, Your Rules</p>
             <p className='text-2xl font-bold font-work-sans'>We Continue To Pursue That Same Vision In Today's Complex, Uncertain World, Working Every Day</p>
           </div>
        </div>
       <div className='grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2 mt-10'>
        {
          [0,0,0,0,0,0].map(()=>{
    
            return (<div className='border p-3 rounded-md cursor-pointer group hover:border-orange-500'>
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
              )})
         }
       </div>
       </div>
      </div>
  )
}


const Footer=()=>{
  return(
   <div className='bg-white container'>
       <div className='my-10 md:mx-16 mx-4'>
    <div className='grid grid-cols-1 md:grid-cols-12 gap-20'> 
     <div className=' md:col-span-6'>
       <div className='my-5 '>
         <img src="/logo/logo.png" className=' w-[100%] md:w-[60%]  hover:scale-105 cursor-pointer' alt="logo" />
       </div>
       <div className='w-full'>
          <p className='my-2 uppercase font-roboto text-justify font-extrabold  text-sm'>Courior pickup ,Delivery,Online Shopping Service ,logistic & supply chain ideal express</p>
          <p className='text-base font-work-sans text-gray-500'>We are ready to give solutions tailored to customer needs and requirements. To confirm elevated precision in our services, we have developed a complete infrastructure required to handle both national and international delivery of shipments. .</p>
       </div>
     </div>
     <div className=' md:col-span-6 '>
        <div className='grid grid-cols-2 my-5'>
          <div>
             <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Quick Links</p>
               <div className='flex flex-col justify-between gap-4 mt-5'>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
               </div>
          </div>
            <div>
             <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Quick Links</p>
               <div className='flex flex-col justify-between gap-4 mt-5'>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
               </div>
          </div>
        </div>
        
     </div>
    </div>
    <hr className='text-transparent mt-16' />
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <div className='md:justify-self-start justify-self-center'>
           <div className='inline-block'>
             <a href="#" className='text-gray-500'>Term and condition</a>  <span className='text-gray-500'>|</span>  <a className='text-gray-500' href="#">privacy policy</a>
           </div>
           <p className='text-center text-gray-500'>© {new Date().getFullYear()} <span className='text-orange-500'>idealcourior.com.np</span></p>
        </div>
        <div className='md:justify-self-end justify-self-center mt-3 md:mt-0'>
           <div className='flex flex-wrap gap-2'>
             <a title='facebok' href=""><img src="/social/facebook.png" className='w-8 h-8' alt="" /></a>
             <a title='instagram' href=""><img src="/social/instagram.png" className='w-8 h-8' alt="" /></a>
             <a title='twitter' href=""><img src="/social/twitter.png" className='w-8 h-8' alt="" /></a>
           </div>
        </div>
    </div>
  </div>
  </div>
  )
}