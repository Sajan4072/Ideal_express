import React from 'react';
import { LockFill } from 'react-bootstrap-icons';
import { BsCardList } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdClear } from "react-icons/md";
const Navbar = ({ collapse, setCollapse }: { collapse: boolean, setCollapse: (set: boolean) => void }) => {
    return (
        <nav className="bg-white border-b fixed z-30 w-full text-sm">
            <div className="px-3 py-4">
                <div className="flex  items-center justify-between">
                    <div className={`${collapse ? 'w-[19%]' : 'w-[19%]'} flex items-center justify-between`}>
                        <div className="text-xl   font-bold flex items-center px-1">
                            <span className='font-bold text-orange-500'>IDEAL</span><span className='text-idealColor'>Courier</span>
                        </div>
                        <div className='text-xl cursor-pointer animate-slow'>
                            {collapse ? <AiOutlineMenu onClick={() => setCollapse(!collapse)} className='text-xl animate-slow ' /> : <MdClear onClick={() => setCollapse(!collapse)} className='text-xl animate-slow' />}

                        </div>
                    </div>
                    <div className='flex '>
                        <p className='text-sm font-bold'>logged In User: </p>
                        <p> jit bdr rana</p>
                    </div>
                    <div className="w-auto flex justify-end text-sm">

                        <div className='flex justify-between gap-3 cursor-pointer'>
                            <div >
                                <IoMdLogOut size={20} />
                            </div>
                            <div>
                                <IoSettings size={20} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
