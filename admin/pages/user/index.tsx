import React, { useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Container from '../../layouts/Container'
import ReactPaginate from 'react-paginate'
import { CgFileAdd } from 'react-icons/cg'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import { FaFileInvoice, FaUserPlus } from 'react-icons/fa'
import { RiBillLine } from 'react-icons/ri'
const index: NextPage = () => {
    return (
        <User />
    )
}

export default index

const User = () => {
    const [edit, setEdit] = useState<boolean>(false);
    return (
        <Container title="User Table ">
            <div className="flex justify-between  mb-2 py-1 ">
                {/* <select title="d" className='w-1/4 text-xs py-1.5 text-gray-600 border focus:outline-none border-gray-300 rounded-md'>
                    <option className='text-gray-500 text-xs' value={''} disabled selected>------ CHOICE BY COURSE ------</option>
                    <option value="">d</option>
                    <option value="">d</option>
                    <option value="">d</option>
                </select> */}
                <input
                    className="mr-3 w-1/5 border border-gray-300 bg-white  px-3 pr-2 rounded-md text-xs focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search user    "

                />
                <Link href='/user/create'>
                    <button type='button' title='addnew' className="bg-gray-800 flex justify-between px-2 py-1.5 text-xs rounded-md text-white  tracking-wide cursor-pointer mr-2">
                        < FaUserPlus size={16} />
                        <span className='ml-2' >Add User</span>
                    </button>
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-t-md sm:rounded-t-lg bg-slate-50">
                <table className="w-full text-sm text-left text-white bg-slate-50 dark:text-gray-400">
                    <thead className="text-xs text-white font-bold uppercase bg-slate-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Full name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                user role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [0, 0, 0, 0, 0, 0, 0].map((data, index) => {
                                return (
                                    <tr key={index} className="border-b text-gray-500 odd:bg-white even:bg-gray-50 ">
                                        <th scope="row" className="px-6 py-2 ">
                                            {index + 1}
                                        </th>
                                        <th scope="row" className="px-6 py-2 text-gray-800 whitespace-nowrap">
                                            jit bdr rana
                                        </th>
                                        <td className="px-6 py-2">
                                            Admin
                                        </td>
                                        <td className="px-6 py-2">
                                            email
                                        </td>
                                        <td className="px-6 py-2">
                                            <button className='p-1 text-xs bg-success text-white rounded-md '>active</button>
                                        </td>

                                        <td className="px-6 py-2 flex flex-wrap gap-x-3">
                                            <a onClick={() => setEdit(true)} className="cursor-pointer ">
                                                <FiEdit size={15} className=' text-gray-600 hover:text-gray-800' />
                                            </a>
                                            <a className="cursor-pointer ">
                                                <FaFileInvoice size={15} className=' text-gray-600 hover:text-gray-800' />
                                            </a>
                                            <a className="cursor-pointer ">
                                                <RiBillLine size={15} className=' text-gray-600 hover:text-gray-800' />
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className='inline-flex items-center'>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={20}
                    onPageChange={() => { return 3 }}
                    containerClassName='flex mt-4 justify-center'
                    breakClassName='mr-2'
                    pageLinkClassName='py-1 px-3'
                    previousLinkClassName='inline-flex items-center py-1 px-2  text-xs font-medium text-white  rounded-md mr-2 border border-gray-700 hover:bg-gray-900 bg-gray-700 '
                    nextLinkClassName='inline-flex items-center py-1 px-4  text-xs font-medium text-white  rounded-md mr-2 border border-gray-700 hover:bg-gray-900 bg-gray-700'
                    activeClassName='inline-flex items-center   text-xs font-medium text-white  rounded-md mr-2 border border-gray-800 hover:bg-gray-800 bg-gray-700  text-gray-100 '
                    pageClassName='inline-flex items-center   text-xs font-medium text-white  rounded-md mr-2 border border-gray-800 hover:bg-gray-800 text-gray-800 hover:text-white '
                />
            </div>
        </Container>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: '/user',
            title: 'User'
        }
    }
}