import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { FaFileInvoice } from 'react-icons/fa';
import { RiBillLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { CgFileAdd } from 'react-icons/cg'

import Form from '../../components/shipment/Form';
import { RiTableAltFill } from 'react-icons/ri';
import Container from '../../layouts/Container';
import { IoIosCreate } from 'react-icons/io';
const index = () => {
    return (
        <Shipment />
    )
}

export default index


export const Shipment = () => {
    const [courses, setCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const [program, setProgram] = useState([]);
    const [edit, setEdit] = useState<boolean>(false);

    const [pagenumber, setPagenumber] = useState(0);
    const coursePerPage = 5;
    const pagesVisited = pagenumber * coursePerPage;

    // const displayCourse = program.length != 0 ? program
    //     .filter(val => {
    //         program
    //         if (searchCourse === '') {
    //             return val;
    //         } else if (
    //             val.name.toLowerCase().includes(searchCourse.toLowerCase())
    //         ) {
    //             return val;
    //         }
    //     })
    //     .slice(pagesVisited, pagesVisited + coursePerPage)
    //     .map((program, index) => {
    //         return (
    //             <tr className="whitespace-nowrap" key={index.id}>
    //                 <td className="px-6 py-4 text-sm text-gray-500">
    //                     {index + 1}
    //                 </td>
    //                 <td className="px-4 py-3">
    //                     <div className="text-sm text-gray-900">
    //                         {program.name}
    //                     </div>
    //                 </td>
    //                 <td className="px-4 py-3">
    //                     <div className="text-sm text-gray-900">
    //                         {program.faculty.name}
    //                     </div>
    //                 </td>
    //                 <td className="px-4 py-3">
    //                     <div className="text-sm text-gray-500">{program.duration} year</div>
    //                 </td>
    //                 <td className="px-4 py-3">
    //                     <div className="text-sm text-gray-500">{program.type}</div>
    //                 </td>
    //                 <td className="px-4 py-3 float-right">
    //                     <Link passHref href={`/course/${program._id}`}><a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">view</a></Link>
    //                     <button onClick={() => deleteCourseData(program._id)} className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</button>
    //                 </td>
    //             </tr>
    //         )
    //     }) : <h1 className='text-center'>No Data found</h1>;

    const pageCount = Math.ceil(courses.length / coursePerPage);
    const changePage = ({ selected }: any) => {
        setPagenumber(selected);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [edit, setEdit])

    return (
        <>
            {
                edit ?
                    <Container title='Edit Shipment ' icon={<IoIosCreate size={25} />}>
                        <Form edit={edit} setEdit={setEdit} />

                    </Container>
                    :
                    <Container title='Shipment Table' icon={<RiTableAltFill size={20} />}>

                        <div className="flex justify-between  mb-2 py-1 ">
                            <select title="d" className='w-1/4 text-xs py-1.5 text-gray-600 border focus:outline-none border-gray-300 rounded-md'>
                                <option className='text-gray-500 text-xs' value={''} disabled selected>------ CHOICE BY COURSE ------</option>
                                <option value="">d</option>
                                <option value="">d</option>
                                <option value="">d</option>
                            </select>
                            <input
                                className="mr-3 w-1/4 border border-gray-300 bg-white  px-5 pr-2 rounded-md text-xs focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search Course"
                                onChange={(e) => {
                                    setSearchCourse(e.target.value);
                                }}
                            />
                            <Link href='/shipment/create'>
                                <button type='button' title='addnew' className="bg-gray-800 flex justify-between px-2 py-1.5 text-xs rounded-md text-white  tracking-wide cursor-pointer mr-2">
                                    <CgFileAdd size={16} />
                                    <span className='ml-2' >Add New</span>
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
                                            Tracking Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Shipper Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Receiver Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
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
                                                        977042387
                                                    </th>
                                                    <td className="px-6 py-2">
                                                        ABINA BASNET THAPA
                                                    </td>
                                                    <td className="px-6 py-2">
                                                        AASHISH THAPA
                                                    </td>
                                                    <td className="px-6 py-2">
                                                        2021-01-08
                                                    </td>
                                                    <td className="px-6 py-2">
                                                        Processed at
                                                    </td>
                                                    <td className="px-6 py-2 flex flex-wrap justify-between">
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
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName='flex mt-4 justify-center'
                                breakClassName='mr-2'
                                previousLinkClassName='inline-flex items-center py-1 px-2  text-xs font-medium text-white  rounded-md mr-2 border border-gray-700 hover:bg-gray-900 bg-gray-700 '
                                nextLinkClassName='inline-flex items-center py-1 px-4  text-xs font-medium text-white  rounded-md mr-2 border border-gray-700 hover:bg-gray-900 bg-gray-700'
                                activeClassName='inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray rounded-lg border border-gray-300 bg-zinc-900'
                                pageClassName='inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 rounded-lg border border-gray-300 '
                            />
                        </div>
                    </Container>
            }
        </>
    )
};




export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: '/shipment',
            title: 'shipment    '
        }
    }
}