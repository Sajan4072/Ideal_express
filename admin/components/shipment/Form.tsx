import { BsFillKeyFill } from "react-icons/bs"
import { IoPerson } from "react-icons/io5"
import { useEffect } from "react";
import { TiArrowBack } from 'react-icons/ti'
import { IoSave } from 'react-icons/io5'
import { VscSaveAs } from 'react-icons/vsc'
interface FormProps {
    edit: boolean;
    setEdit?: (set: boolean) => void,
    className?: string;
}

const Form = ({ edit, setEdit, className }: FormProps) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [edit, setEdit])
    return (

        <form className={`${className}`}>
            {/* add shipemnt  */}
            <div className={`shadow-lg px-3 pb-3 my-2 `}>
                <p className='px-2 py-1.5 text-sm font-bold border-l-4 border-l-gray-900 bg-gray-400 text-white rounded-l-sm'>Create Shipment Id</p>
                <div className='py-2'>
                    <p className='flex gap-3 mt-3 text-gray-900 text-base font-bold underline'><span>Shipment Track Id</span> <BsFillKeyFill size={18} /></p>
                    <input type="number" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-[30%] p-1.5 " placeholder="9777078953" />
                </div>
            </div>
            {/* shippmet details  */}
            <div className='shadow-lg p-3 py-2'>
                <p className='px-2 py-1.5 text-sm font-bold border-l-4 border-l-gray-900 bg-gray-400 text-white rounded-l-sm'>Shipment Details</p>
                <div>
                    <p className='flex gap-3 mt-3 text-gray-900 text-base font-bold underline'><span>Shipper Details</span> <IoPerson size={18} /></p>
                    <div className="grid gap-6 mb-6 lg:grid-cols-4 mt-2 ">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Shipper Name</label>
                            <input type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Phone Number</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Address</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Email</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='flex gap-3 mt-3 text-gray-900 text-base font-bold underline'><span>Receiver Details</span> <IoPerson size={18} /></p>
                    <div className="grid gap-6 mb-6 lg:grid-cols-4 mt-2 ">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Receiver Name</label>
                            <input type="text" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Phone Number</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Address</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Email</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='flex gap-3 mt-3 text-gray-900 text-base font-bold underline'><span>Shipment Details</span> <IoPerson size={18} /></p>
                    <div className="grid gap-6 mb-6 lg:grid-cols-4 mt-2 ">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">
                                Type of Shipment</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Weight</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Courier</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Packages</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">
                                Mode</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Product</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Quantity</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Payment Mode</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Total Freight</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Carrier</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Carrier Reference No.</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Departure Time</label>
                            <input type="time" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Origin</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Destination</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Pickup Date</label>
                            <input type="date" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Pickup Time</label>
                            <input type="time" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Expected Delivery Date</label>
                            <input type="date" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="John" />
                        </div>
                        <div className='col-span-4'>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Expected Delivery Date</label>
                            <textarea title='comments' className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " name="" id="" ></textarea>
                        </div>

                    </div>
                </div>
            </div>
            <div className='shadow-lg p-3 my-4'>
                <p className='px-2 py-1.5 text-sm font-bold border-l-4 border-l-gray-900 bg-gray-400 text-white rounded-l-sm'>Publish</p>
                <div>
                    <p className='flex gap-3 mt-3 text-gray-900 text-base font-bold underline'><span>Shipper Details</span> <IoPerson size={18} /></p>
                    <div className="grid gap-6 mb-6 lg:grid-cols-4 mt-2 ">
                        <div className=''>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 "> Date</label>
                            <input type="date" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="2022-05-30" />
                        </div>
                        <div className=''>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 "> Time</label>
                            <input type="time" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="16:12 pm" />
                        </div>
                        <div className=''>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 "> Location</label>
                            <input type="text" id="" className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " placeholder="location" />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Status</label>
                            <select title='type' id="" className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 ">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className='col-span-3'>
                            <label htmlFor="first_name" className="block mb-2 text-sm  text-gray-900 ">Remarks</label>
                            <textarea title='comments' className=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full p-1.5 " name="" id="" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 shadow-lg p-3 my-4 flex flex-row-reverse gap-2'>
                <button type="button" className='bg-gray-600 hover:bg-gray-800 text-white rounded-md py-1 px-3 text-sm flex items-center gap-2'><span>Save</span> <IoSave size={15} /></button>

                {
                    !edit ?
                        <button type="button" className='bg-gray-600 hover:bg-gray-800 text-white rounded-md py-1 px-3 text-sm flex items-center gap-2'><span>Save As Draft</span> <VscSaveAs size={15} /></button> :
                        <button onClick={() => setEdit!(false)} type="button" className='bg-gray-600 hover:bg-gray-800 text-white rounded-md py-1 px-3 text-sm flex items-center gap-2'><span>Back</span> <TiArrowBack size={25} /></button>
                }
            </div>
        </form >
    )
}


export default Form;