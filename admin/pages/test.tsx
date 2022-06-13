import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'
import Container from '../layouts/Container'
const test: NextPage = () => {
  return (
    <Text />
  )
}

export default test



const Text = () => {
  const global = useGlobalContext();

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

  useEffect(() => {
    global.setUser({ name: 'jit rana magar', isLoggedin: true })
  }, [])


  return (
    <Container title='Test page'>
      hellow test page
      <div>
        {process.env.sourceApi}
        {process.env.jwtSecret}
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      page: 'text',
      title: 'practise'
    }
  }
}