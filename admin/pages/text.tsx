import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'
const text: NextPage = () => {
  return (
    <Text />
  )
}

export default text



const Text = () => {
  // const myFunction = () => {
  //   // your logic here
  //   console.log('pressed Esc ✅');
  // };
  // useEffect(() => {
  //   const keyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
  //     console.log('User pressed: ', event.key);

  //     if (event.key === 'Escape') {
  //       event.preventDefault();

  //       // 👇️ your logic here
  //       myFunction();
  //     }
  //   };

  //   document.addEventListener('keydown', keyDownHandler);

  //   // 👇️ clean up event listener
  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };
  // }, []);

  const global = useGlobalContext();
  useEffect(() => {
    global.setUser({ name: 'jit rana magar', isLoggedin: true })
  }, [])


  return (
    <div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      page: 'text',
      title: 'practise'
    }
  }
}