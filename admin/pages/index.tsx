import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { At, Key } from 'react-bootstrap-icons';
const Home: NextPage = () => {
  return (
    <Login />
  )
}

export default Home


const Login = () => {

  return (
    <div className='h-screen flex justify-center  bg-login'>
      <div className="flex  w-1/3 justify-center items-center">
        <form className="w-full bg-white py-16 p-8 rounded-md shadow-2xl border" >
          <h1 className="text-gray-800 text-center font-bold text-2xl mb-1">Admin Login!</h1>
          <p className="text-sm font-normal text-center text-gray-600 mb-7">ideal courier</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <At className='h-5 w-5 text-gray-400' size={16} />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
            {/* {errors?.email && <small className='text-red-600'>{errors.email.message}</small>} */}
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <Key className='h-5 w-5 text-gray-400' />
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
            // {...register("password",{required:true})}
            />
            {/* {errors?.password && <small className='text-red-600'>{errors.password.message}</small>} */}
          </div>
          <button
            type="submit"
            className="block w-full bg-idealColor  mt-4 py-2 rounded-md text-white font-semibold mb-2">
            Login
          </button>
          <span
            className="text-sm ml-2 hover:text-orange-900 text-purple-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      page: '/'
    }
  }
}