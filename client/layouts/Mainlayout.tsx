import Head from "next/head";
import React from "react";
import Footer from './Footer'
import Header from './Header'
export interface MetaInformationInterface {
  title: string;
  children: React.ReactNode,
  metaImg?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  metaTag?: string;
}
export default function MainLayout({ children, title, metaImg, metaTitle, metaDescription, metaKeyword, metaTag }: MetaInformationInterface) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Meta Tags */}
        {/* facebook */}
        <meta property="og:image" content={metaImg} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="fb:app_id" content="961541957962839" />
        {/* for seo */}
        <meta name="description" content={metaDescription} />
        {metaKeyword && <meta name="keywords" content={metaKeyword} />}
        {metaTag && <meta name="tags" content={metaTag} />}
        <meta name="author" content="idealcourier.com.np"></meta>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.min.css" integrity="sha512-FEQLazq9ecqLN5T6wWq26hCZf7kPqUbFC9vsHNbXMJtSZZWAcbJspT+/NEAQkBfFReZ8r9QlA9JHaAuo28MTJA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Header />
      <main className="font-roboto text-gray-800  ">{children}</main>
      <Footer />
    </>
  )
}