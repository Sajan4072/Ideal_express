import Link from 'next/link';
import { useState, useEffect } from 'react'
import { MenuData } from '../data/routing.data';
const Header = () => {
  const [fixnav, setFixnav] = useState<boolean>(false);
  const [nav, setNav] = useState<number | never>();
  const handleScrollChange = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setFixnav(true);
    } else {
      setFixnav(false)
    }
  }
  const activeNav = (index: number): any => {
    setNav(index)
    sessionStorage.setItem("activeNav", `${index}`)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange, { passive: true });
    if (!sessionStorage.getItem("activeNav") || sessionStorage.getItem("activeNav") === '') {
      sessionStorage.setItem("activeNav", `0`)
    } else {
      setNav(parseInt(sessionStorage.getItem("activeNav")!))
    }
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);
  return (
    <div className={`py-2 font-roboto  bg-white ${fixnav ? 'fixed shadow-md md:py-0 md:bg-white text-black z-50 animate-fadeInDown  ' : 'md:py-0 absolute md:bg-black text-white md:bg-opacity-30'} inset-x-0 border-b border-transparent`}>
      <div className='grid grid-cols-12  pt-1 px-2 md:px-24'>
        <div className='col-span-6 md:col-span-4 justify-self-start flex justify-items-center justify-start'>
          <div className={`my-1 ${fixnav ? 'md:w-[70%]' : 'md:w-[90%]'} w-[100%] cursor-pointer `}>
            <Link href="/" >
              <img src="/logo/logo.png" className='w-full' alt="" />
            </Link>
          </div>
        </div>
        <div className='col-span-6 md:col-span-8 justify-self-end flex justify-center'>
          <div className="md:hidden justify-self-end mt-2">
            <img src="/icon/list.png" className="h-8 w-8" alt="menu" />
          </div>
          <div className={`${fixnav ? "" : "md:mt-6"} `}>
            <div className={` text-xs hidden  ${fixnav ? 'hidden' : 'md:flex'}  flex-row-reverse gap-x-6`}>
              <div>
                <a href="" className='p-2.5 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 rounded-md hover:bg-orange-500 hover:text-white bg-white text-black text-sm font-bold'><i className="fi fi-br-home"></i><span className='ml-2 '>Branch Login</span></a>
              </div>
              <div className='flex gap-2 items-center '>
                <img src="/icon/email.png" className='h-6 w-6 ' alt="" />
                info@idealcourier.com.np
              </div>
              <div className='flex gap-2 items-center'>
                <img src="/icon/viber.png" className='h-6 w-6 ' alt="" />
                +977-9851168433
              </div>
              <div className='flex gap-2 items-center'>
                <img src="/icon/whatsapp.png" className='h-6 w-6 ' alt="" />
                +977-9851168433
              </div>
            </div>

            <div className={`md:flex hidden ${fixnav ? '  mt-8 items-center' : 'mt-8 items-end'} flex justify-center    gap-x-11`}>
              {MenuData.map((data, index) => {
                return (
                  <Link href={data.url}>
                    <div onClick={() => activeNav(index)} className={`${fixnav ? 'pb-3' : 'pb-3'} ${nav === index && 'active-nav'} relative text-sm font-bold items-end before:hover:wiggle before:contents['']  before:absolute before:h-[0.155rem] before:bottom-0 before:w-[100%] ${fixnav ? "before:hover:bg-black" : "before:hover:bg-orange-500"} cursor-pointer before:hover:transition before:hover:duration-[0.8s] before:hover:ease-ease  before:hover:delay-[0s] before:hover:animate-wiggle hover:text-orange-500`}>{data.name}</div>
                  </Link>
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