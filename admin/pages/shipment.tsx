import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';

const shipment = () => {
    return (
        <Shipment />
    )
}

export default shipment


export const Shipment = () => {
    const [courses, setCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const [program, setProgram] = useState([]);


    useEffect(() => {
    }, []);



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

    const deleteCourseData = async (id: number) => {
        // getCourse();
    }


    return (
        <div className='block w-full overflow-x-auto flex-1 animate-slow'>
            <div className="flex justify-between  mb-2">
                <select title="d" className='w-1/4 text-xs py-2 text-gray-600 border focus:outline-none border-gray-300 rounded-md'>
                    <option className='text-gray-500 text-xs' value={''} disabled selected>------ CHOICE BY COURSE ------</option>
                    <option value="">d</option>
                    <option value="">d</option>
                    <option value="">d</option>
                </select>
                <input
                    className="mr-3 w-1/3 border border-gray-300 bg-white  px-5 pr-2 rounded-md text-xs focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search Course"
                    onChange={(e) => {
                        setSearchCourse(e.target.value);
                    }}
                />
                <Link href='/course/create'>
                    <button className="bg-success px-2 py-2 text-xs rounded-md text-white  tracking-wide cursor-pointer mr-2">
                        Add New
                    </button>
                </Link>
            </div>
            <table className="w-full text-left text-base">
                <thead className='bg-gray-100  dark:bg-gray-700 border-b border-gray-200 shadow'>
                    <tr className="font-poppin border border-b-0 text-white">
                        <th className="px-4 py-1.5">S/N</th>
                        <th className="px-4 py-1.5">Name</th>
                        <th className="px-4 py-1.5">faculty</th>
                        <th className="px-4 py-1.5">duration</th>
                        <th className="px-4 py-1.5">type</th>
                        <th className="px-4 py-1.5 float-right mr-4">Modification</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">
                            sd
                        </td>
                        <td className="px-4 py-3">
                            <div className="text-sm text-gray-900">
                                as
                            </div>
                        </td>
                        <td className="px-4 py-3">
                            <div className="text-sm text-gray-900">
                                s
                            </div>
                        </td>
                        <td className="px-4 py-3">
                            <div className="text-sm text-gray-500">1 year</div>
                        </td>
                        <td className="px-4 py-3">
                            <div className="text-sm text-gray-500">sad</div>
                        </td>
                        <td className="px-4 py-3 float-right">
                            <Link passHref href={`/course/`}><a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">view</a></Link>
                            <button className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div className='inline-flex items-center'>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName='flex mt-4'
                    breakClassName='mr-2'
                    previousLinkClassName='inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    nextLinkClassName='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    activeClassName='inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray rounded-lg border border-gray-300 bg-zinc-900'
                    pageClassName='inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 rounded-lg border border-gray-300 '
                />
            </div>
        </div>
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