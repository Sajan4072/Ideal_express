import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Head from 'next/head'

const MainLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [collapse, setCollapse] = useState<boolean>(false);
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title ? title : 'Ideal courier | '}</title>
            </Head>
            <div className="flex flex-wrap bg-gray-100 w-full h-screen font-roboto">
                <Navbar collapse={collapse} setCollapse={setCollapse} />
                <div className="flex overflow-hidden bg-white pt-16">
                    <Sidebar collapse={collapse} />
                </div>
                <div className={`h-full w-full animate-slow bg-gray-50 relative overflow-y-auto ${collapse ? 'lg:ml-[3.5rem]' : 'lg:ml-[15rem]'}`}>
                    <div className="pt-2 px-2">
                        <div className="bg-white shadow rounded-sm px-5 py-3 pb-1  ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainLayout;
