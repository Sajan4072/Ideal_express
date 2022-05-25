import Link from 'next/link';
import {useState,useEffect} from 'react'
import { MenuData } from '../data/routing.data';
const Header=()=>{
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
    return (
        <div className={`py-2  bg-white ${fixnav?'fixed shadow-md md:py-0 md:bg-white text-black z-50 animate-fadeInDown  ':'md:py-0 absolute md:bg-black text-white md:bg-opacity-30'}  border-b border-transparent`}>
    <div className='grid grid-cols-12  pt-1 px-2 md:px-24'>
        <div className='col-span-6 md:col-span-4 justify-self-start flex justify-items-center justify-start'>
          <div className={`my-1 ${fixnav?'md:w-[80%]':'md:w-[100%]'} w-[100%] cursor-pointer `}>
           <Link href="/" >
            <img src="/logo/logo.png" className='w-full' alt="" />
           </Link>
          </div>
        </div>
        <div className='col-span-6 md:col-span-8 justify-self-end flex justify-center'>
          <div className="md:hidden justify-self-end mt-2">
            <img src="/icon/list.png" className="h-8 w-8" alt="menu" />
          </div>
        <div className={`${fixnav?"":"md:mt-6"} `}>
           <div className={` hidden  ${fixnav?'hidden':'md:flex'}  flex-row-reverse gap-x-6`}>
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
              <div className={`${fixnav?'pb-6':'pb-3'} relative text-base font-bold items-end before:hover:wiggle before:contents['']  before:absolute before:h-[0.15rem] before:bottom-0 before:w-[100%] ${fixnav?"before:hover:bg-black":"before:hover:bg-white"} cursor-pointer before:hover:transition before:hover:duration-[0.8s] before:hover:ease-ease  before:hover:delay-[0s] before:hover:animate-wiggle`}><Link href={data.url}>{data.name}</Link></div>
             )
            })
          }
          </div>
          </div>
        </div>
    </div>
   </div>
    )
}

export default Header;