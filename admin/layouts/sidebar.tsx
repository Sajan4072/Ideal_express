import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import { sidebarData } from '../datas/sidebar.data';
const Sidebar = ({ collapse }: { collapse: boolean }) => {

  return (
    <aside className={`fixed hidden z-20 h-full top-0 left-0 pt-[3.8rem] lg:flex flex-shrink-0 flex-col ${collapse ? 'w-[3.5rem]  animate-sidebarDraw' : ' w-[15rem]'} `}>
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px- bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              {
                sidebarData.map((content, index) => {
                  return (
                    <li>
                      {
                        content.isSubtitle === false ?

                          <Link href={content.url}>
                            <a href="#/" className="text-base hover:bg-gray-200 hover:border-l-4 border-l-4 border-white hover:border-gray-700 text-gray-900 font-normal rounded-l-sm flex items-center py-2 px-4 group">
                              {content.icon}
                              <span className={`ml-3 font-bold text-sm ${collapse && 'hidden'}`}>{content.title}</span>
                            </a>
                          </Link>
                          :
                          <Drawer collapse={collapse} content={content} />
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
};
export default Sidebar;
const Drawer = ({ content, collapse }: { content: any, collapse: boolean }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    (show ? setShow(false) : setShow(true))
  }
  return (
    <li >
      <button title='button' onClick={handleShow} type="button" className="text-sm font-bold w-full text-gray-900 hover:border-l-4 border-l-4 border-white hover:border-gray-700  rounded-l-sm hover:bg-gray-200 flex items-center py-2 px-4 group " >
        {content.icon}
        <span className={`${collapse && 'hidden'} flex-1 ml-3 text-left whitespace-nowrap`} sidebar-toggle-item>{content.title}</span>
        {show ? <MdKeyboardArrowDown size={25} className={`animate-slow ${collapse && 'hidden'}`} /> : <MdKeyboardArrowRight size={25} className={`animate-slow ${collapse && 'hidden'}`} />}
      </button>
      <ul className={` animate-dropdown ${show ? "block" : "hidden"}  ${collapse && 'hidden'} py-2 space-y-2`}>
        <li>
          {
            content.subTitle.map((data: any, index: number) => {
              return (
                <Link href={data.url}>
                  <a href="#/" className="  pl-11 border-l-4 hover:border-l-4 text-gray-900 border-white font-normal rounded-l-sm hover:border-gray-700 hover:bg-gray-200 flex items-center bg p-2 group ">
                    {data.icon}
                    <span className='text-sm ml-3 font-bold'>{data.title}</span>
                  </a>
                </Link>
              )
            })
          }
        </li>

      </ul>
    </li>
  )
}