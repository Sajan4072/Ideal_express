import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import Container from '../../layouts/Container'
const profile = () => {
    return (
        <Profile />
    )
}

export default profile


export const Profile = () => {

    const tab: string[] = ['profile', 'password change', 'activity log']
    const [currentTab, setCurrentTab] = useState<string>(tab[0])

    return (
        <Container title='User Profile'>
            <div className='container mx-auto px-5 pt-3 '>
                <div className='flex flex-col'>
                    <div className='flex gap-[0.1rem] -mb-[0.05rem] z-10 text-sm cursor-pointer'>
                        <div onClick={() => setCurrentTab(tab[0])} className={` px-10 py-3  rounded-t-md  ${tab[0] === currentTab ? 'border-x border-t-2 border-t-orange-600 bg-slate-50 text-gray-900' : 'text-gray-500'}`}>Own Profile</div>
                        <div onClick={() => setCurrentTab(tab[1])} className={` px-10 py-3  rounded-t-md  ${tab[1] === currentTab ? 'border-x border-t-2 border-t-orange-600 bg-slate-50 text-gray-900' : 'text-gray-500'}`}>Change Password</div>
                        <div onClick={() => setCurrentTab(tab[2])} className={` px-10 py-3  rounded-t-md  ${tab[2] === currentTab ? 'border-x border-t-2 border-t-orange-600 bg-slate-50 text-gray-900' : 'text-gray-500'}`}>Activity Log</div>
                    </div>
                    <div className={`bg-slate-50 shadow-lg border-y border-x ${tab[0] != currentTab && 'hidden'}`}>
                        <div className='p-8'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-2'>
                                    <div className='w-2/4'>
                                        <img alt='profile' title='profile' src={'/profile.png'} height={100} width={100} className='border-gray-900   rounded-full w-full ' />
                                    </div>
                                </div>
                                <div className='col-span-10'>
                                    <h1 className='font-bold text-sm text-gray-800'>Personal Information</h1>
                                    <div className='grid grid-cols-3 gap-2 pt-2 text-gray-500'>
                                        <div>
                                            jit bdr rana
                                        </div>
                                        <div>
                                            9807590188
                                        </div>
                                        <div>
                                            maitidevi
                                        </div>
                                        <div>
                                            Admin
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-slate-50 shadow-lg border-y border-x  ${tab[1] != currentTab && 'hidden'}`}>
                        <div className='p-5'>
                            <div className='grid grid-cols-12 gap-x-4'>
                                <div className='col-span-4 text-sm text-gray-500'>
                                    <form>
                                        <div className='py-2'>
                                            <label htmlFor="old_password" className='pb-4 bolck' >Old Password</label>
                                            <input type="password" title="Old password" className=' w-full rounded-sm focus:outline-none border-gray-300 py-1.5 px-3 border ' placeholder="Old password" />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="new_password" className='pb-2' >New Password</label>
                                            <input type="password" title="New password" className='w-full rounded-sm focus:outline-none border-gray-300 py-1.5 px-3 border ' placeholder="New password" />
                                        </div>
                                        <div className='py-2'>
                                            <label htmlFor="confirm_password" className='pb-2' >Confirm Password</label>
                                            <input type="password" title="Confirm password" className='rounded-sm w-full focus:outline-none border-gray-300 py-1.5 px-3 border ' placeholder="Confirm password" />
                                        </div>
                                        <div>
                                            <button title='save' type='button' className='px-3 py-1.5 bg-gray-700 hover:bg-gray-900 rounded-md text-white'>Save Change</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-span-8'>
                                    <div className='py-2'>
                                        <h1 className='font-bold text-sm text-gray-500'>Password policy</h1>
                                        <ul className='text-gray-500 text-sm list-disc pl-5'>
                                            <li className='pb-2'>password must be greater than 6</li>
                                            <li className='pb-2'>password must be greater than 6</li>
                                            <li className='pb-2'>password must be greater than 6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-slate-50  shadow-lg border-y border-x  ${tab[2] != currentTab && 'hidden'}`}>
                        <div className='p-5'>
                            Activity section
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

// profile.getLayout = function getLayout(page: ReactElement) {
//     return (
//         <div>
//             <div>
//                 diff layout for diff page
//             </div>
//             <div>{page}</div>
//         </div>
//     )
// }

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {
            page: '/user-profile',
            title: 'User Profile'
        }
    }
}