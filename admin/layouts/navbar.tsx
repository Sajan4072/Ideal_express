import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { useGlobalContext } from '../contexts/GlobalContext';
const Navbar = ({ collapse, setCollapse }: { collapse: boolean, setCollapse: (set: boolean) => void }) => {
    const global = useGlobalContext();
    return (
        <nav className="bg-white border-b fixed z-30 w-full text-sm shadow-sm">
            <div className="px-3 py-4">
                <div className="flex  items-center justify-between">
                    <div className={`${collapse ? 'w-[19%]' : 'w-[19%]'} flex items-center justify-between`}>
                        <div className="text-xl   font-bold flex items-center px-1 ">
                            <span className='font-bold text-orange-500'>IDEAL</span><span className='text-idealColor'>Courier Admin</span>
                        </div>
                        <div className='text-xl cursor-pointer animate-slow'>
                            {collapse ? <AiOutlineMenu onClick={() => setCollapse(!collapse)} className='text-xl animate-slow ' /> : <MdClear onClick={() => setCollapse(!collapse)} className='text-xl animate-slow' />}

                        </div>
                    </div>
                    <div className='flex '>

                    </div>
                    <div className="w-auto flex justify-end text-sm">

                        <div className='flex justify-between gap-3 cursor-pointer items-center'>
                            <div >
                                <IoMdLogOut title='logout' size={20} />
                            </div>
                            <div>
                                <IoSettings title='settings' className='animate-spin hover:animate-none  ' size={20} />
                            </div>
                            <div className=' '>
                                <CgProfile className='' title='profile' size={20} />

                            </div>
                            <div className='leading-4 text-center text-gray-600 text-xs'>
                                <p>{global?.user?.name || 'jit'}</p>
                                <p className='text-xs'>Admin</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
