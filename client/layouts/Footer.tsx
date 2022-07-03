const Footer = () => {
  return (
    <div className=' bg-slate-200 font-roboto'>
      <div className='bg-slate p-5 mx-auto container '>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-20'>
          <div className=' md:col-span-6'>
            <div className='w-full mt-5'>
              <p className='my-2 uppercase font-roboto text-justify font-bold  text-lg'>Courior pickup ,Delivery,online shopping Service ,logistic & supply chain ideal express</p>
              <p className='text-base font-work-sans text-gray-500'>We are ready to give solutions tailored to customer needs and requirements. To confirm elevated precision in our services, we have developed a complete infrastructure required to handle both national and international delivery of shipments. .</p>
            </div>
            <div className='my-2'>
              <img src="/logo/logo.png" className=' w-[100%] md:w-[60%]  hover:scale-105 cursor-pointer' alt="logo" />
            </div>
          </div>
          <div className=' md:col-span-6 '>
            <div className='grid grid-cols-2 my-5 font-poppin text-base'>
              <div>
                <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Quick Links</p>
                <div className='flex flex-col justify-between gap-4 mt-5'>
                  <a href="" className=' hover:text-orange-600 font-bold  '>Home</a>
                  <a href="" className=' hover:text-orange-600 font-bold  '>Service</a>
                  <a href="" className=' hover:text-orange-600 font-bold  '>Contctus</a>
                  <a href="" className=' hover:text-orange-600 font-bold  '>Branch</a>
                </div>
              </div>
              <div>
                <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Get In Touch</p>
                <div className='flex flex-col justify-between gap-4 mt-5'>
                  <p>Head Office: Gaushala Chowk, Battisputali Road (Along with NIC Asia Bank & Nearby Hotel Dwarika), Kathmandu, Nepal</p>
                  <p>+977-1-4578809, 4478678</p>
                  <p>info@idealcourier.com.np</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="bg-[#c64300] text-white">
        <hr className='text-transparent mt-2' />
        <div className="container px-5 mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-3 py-2'>
            <div className='md:justify-self-start text-sm justify-self-center items-center'>
              <div className='inline-block'>
                <a href="#" className=''>Term and condition</a>  <span className=''>|</span>  <a className='' href="#">privacy policy</a>
              </div>
              <p className='text-center '>© {new Date().getFullYear()} <span className=''>idealcourior.com.np</span></p>
            </div>
            <div className='md:justify-self-center text-center text-sm justify-self-center items-center'>
              <div className='inline-block'>
                <p>Develope by</p>
              </div>
              <p className='text-center '>jit bdr rana,sajan rai</p>
            </div>
            <div className='md:justify-self-end justify-self-center items-center flex'>
              <div className='flex flex-wrap gap-2 '>
                <a title='facebok' href=""><img src="/social/facebook.png" className='w-8 h-8' alt="" /></a>
                <a title='instagram' href=""><img src="/social/instagram.png" className='w-8 h-8' alt="" /></a>
                <a title='twitter' href=""><img src="/social/twitter.png" className='w-8 h-8' alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Footer;