const Footer = () => {
  return (
    <div className='bg-white container font-roboto'>
      <div className='my-10 md:mx-16 mx-4'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-20'>
          <div className=' md:col-span-6'>
            <div className='my-5 '>
              <img src="/logo/logo.png" className=' w-[100%] md:w-[60%]  hover:scale-105 cursor-pointer' alt="logo" />
            </div>
            <div className='w-full'>
              <p className='my-2 uppercase font-roboto text-justify font-extrabold  text-sm'>Courior pickup ,Delivery,Online Shopping Service ,logistic & supply chain ideal express</p>
              <p className='text-base font-work-sans text-gray-500'>We are ready to give solutions tailored to customer needs and requirements. To confirm elevated precision in our services, we have developed a complete infrastructure required to handle both national and international delivery of shipments. .</p>
            </div>
          </div>
          <div className=' md:col-span-6 '>
            <div className='grid grid-cols-2 my-5'>
              <div>
                <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Quick Links</p>
                <div className='flex flex-col justify-between gap-4 mt-5'>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                </div>
              </div>
              <div>
                <p className='relative pb-2 uppercase text-base font-bold font-work-sans after:content[""] after:h-1 after:absolute after:bottom-0 after:left-0  after:w-[6.5rem] after:bg-orange-600 '>Quick Links</p>
                <div className='flex flex-col justify-between gap-4 mt-5'>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                  <a href="" className='text-gray-500 hover:text-orange-600 hover:font-bold font-poppin text-sm'>Home</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr className='text-transparent mt-16' />
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
          <div className='md:justify-self-start justify-self-center'>
            <div className='inline-block'>
              <a href="#" className='text-gray-500'>Term and condition</a>  <span className='text-gray-500'>|</span>  <a className='text-gray-500' href="#">privacy policy</a>
            </div>
            <p className='text-center text-gray-500'>© {new Date().getFullYear()} <span className='text-orange-500'>idealcourior.com.np</span></p>
          </div>
          <div className='md:justify-self-end justify-self-center mt-3 md:mt-0'>
            <div className='flex flex-wrap gap-2'>
              <a title='facebok' href=""><img src="/social/facebook.png" className='w-8 h-8' alt="" /></a>
              <a title='instagram' href=""><img src="/social/instagram.png" className='w-8 h-8' alt="" /></a>
              <a title='twitter' href=""><img src="/social/twitter.png" className='w-8 h-8' alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;