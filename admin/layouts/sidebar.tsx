import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import { sidebarData } from '../datas/sidebar.data';
const Sidebar = ({ collapse }: { collapse: boolean }) => {
  const [activeNav, setActiveNav] = useState<number>(0);
  const handleNav = (index: number) => {
    sessionStorage.setItem('admin-nav', `${index}`);
    setActiveNav(index)
  }
  useEffect(() => {
    const current_nav: string | never | null = sessionStorage.getItem("admin-nav")
    if (current_nav != null || current_nav === '') {
      setActiveNav(parseInt(current_nav))
    }
  }, [])
  return (
    <aside className={`fixed hidden border-r bg-gray-50 border-gray-200  z-40 h-full top-0 left-0  lg:flex flex-shrink-0 flex-col ${collapse ? 'w-[3.5rem]  pt-[m] ' : ' w-[15rem] '} transition-all duration-500  bg-white `}>
      <div className="relative mt-2 flex-1 flex flex-col  overflow-y-auto">
        <div className={`text-xl   font-bold flex items-center py-[1rem] px-1  `}>
          <img src="/delivery-man.png" className='' alt="" />
          <div className={`font-bold text-orange-500 ${collapse && 'hidden'}`}>
            <span className='block'>Ideal Courior</span>
            <span className='text-idealColor block text-center'> Admin</span>
          </div>
        </div>
        <div className="  flex flex-col   ">
          <div className="flex-1  divide-y space-y-1 ">
            <ul className="space-y-1 pb-2 font-bold text-xs">
              {
                sidebarData.map((content, index) => {
                  return (
                    <li key={index}>
                      {
                        content.isSubtitle === false ?

                          <Link href={content.url!}>
                            <a onClick={() => handleNav(index)} className={`${activeNav === index ? 'active-nav' : 'border-white'}   border-b-2 border-b-transparent hover:bg-gray-200 hover:border-l-4 border-l-4  hover:border-l-gray-700 text-gray-900 font-normal rounded-l-sm flex items-center py-1.5 px-4 group`}>
                              {content.icon}
                              <span className={`ml-3 font-bold ${collapse && 'hidden'}`}>{content.title}</span>
                            </a>
                          </Link>
                          :
                          <Drawer collapse={collapse} content={content} setActiveNav={handleNav} activeNav={activeNav} parentNav={index} />
                        // <Draw />
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

      </div>
      {
        collapse ||
        <div className='my-2 w-full  bottom-2'>
          <div className=' text-center w-full '>
            <p className='font-bold text-gray-600 cursor-pointer text-xs hover:text-gray-900 '>Developed by jit rana magar</p>
            <p className='font-bold font-roboto text-orange-500 text-xs'>@Ideal Courier Admin {new Date().getFullYear()}</p>
          </div>
        </div>
      }
    </aside>
  )
};
export default Sidebar;
const Drawer = ({ content, collapse, activeNav, setActiveNav, parentNav }: { content: any, collapse: boolean, activeNav: number, setActiveNav: (set: number) => void, parentNav: number }) => {
  const [show, setShow] = useState<boolean>(false);
  const [currentNav, setCurrentNav] = useState<number | never>();

  const handleShow = () => {
    show ? setShow(false) : setShow(true)
  }
  const handleNav = (index: number) => {
    setCurrentNav(index)
    sessionStorage.setItem('admin-child-nav', `${index}`);
  }
  useEffect(() => {
    const current_nav: string | never | null = sessionStorage.getItem("admin-child-nav")
    if (current_nav != null || current_nav != '') {
      setCurrentNav(parseInt(current_nav!))
    }
  }, [])
  return (
    <>
      <button title='button' onClick={handleShow} type="button" className={` ${!show && activeNav === parentNav && 'active-nav'} ${collapse && activeNav === parentNav && 'active-nav'} ${!collapse ? activeNav !== parentNav ? 'border-white' : show && 'border-white' : activeNav !== parentNav && 'border-white'}   font-bold w-full text-gray-900 hover:border-l-4 border-l-4  rounded-l-sm  flex items-center py-1.5 px-4 group `} >
        {content.icon}
        <span className={`${collapse && 'hidden'}   flex-1 ml-3 text-left whitespace-nowrap`} >{content.title}</span>
        {show ? <MdKeyboardArrowDown size={25} className={`animate-slow ${collapse && 'hidden'}`} /> : <MdKeyboardArrowRight size={25} className={`animate-slow ${collapse && 'hidden'}`} />}
      </button>
      <ul className={` animate-dropdown transition duration-700 ${show ? "block" : "hidden"}  ${collapse && 'hidden'} `}>
        <li>
          {
            content.subTitle.map((data: any, index: number) => {
              return (
                <Link key={index} href={data.url}>
                  <a onClick={() => { setActiveNav(parentNav); handleNav(index) }} className={` ${show && !collapse && activeNav === parentNav && currentNav === index ? 'active-nav' : 'border-white'} my-1 pl-11 border-l-4 hover:border-l-4 text-gray-900  font-normal rounded-l-sm hover:border-gray-700 hover:bg-gray-200 flex items-center bg py-1.5 group `}>
                    {data.icon}
                    <span className=' ml-3 font-bold'>{data.title}</span>
                  </a>
                </Link>
              )
            })
          }
        </li>
      </ul>
    </>
  )
}
