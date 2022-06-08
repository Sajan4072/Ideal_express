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
            <div className="flex flex-wrap  w-full h-screen font-roboto ">
                <Navbar collapse={collapse} setCollapse={setCollapse} />
                <div className="flex overflow-hidden bg-white pt-[3.8rem]">
                    <Sidebar collapse={collapse} />
                </div>
                <div className={`h-full transition-all duration-500 w-full animate-slow  relative px-1 py-1 ${collapse ? 'lg:ml-[3.5rem]' : 'lg:ml-[15rem]'}`}>
                    <div className=" shadow rounded-sm px-5 py-3   ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainLayout;
