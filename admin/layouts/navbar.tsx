import React from 'react';
import { LockFill } from 'react-bootstrap-icons';
import { BsCardList } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
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
                    <div className="w-auto flex justify-end text-sm">

                        <div>
                            <button
                                type='button'
                                className="hidden sm:inline-flex content-end text-white bg-orange-700 hover:bg-orange-900  font-medium rounded-md text-sm px-3 py-1 text-center  ">
                                <LockFill className='mr-2 mt-1' />
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
