const {PHASE_DEVELOPMENT_SERVER,PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER} =require('next/constants')
/** @type {import('next').NextConfig} */

const nextConfig =(phase)=> {
  const isDev=phase===PHASE_DEVELOPMENT_SERVER;
  const isProd=phase===PHASE_PRODUCTION_BUILD && process.env.stagging==='1';
  const isStagging=phase===PHASE_PRODUCTION_BUILD && process.env.stagging==='1'
const env={
          sourceApi:"localhost:5000",
          jwtSecret:'adfas2332#233232fsasfd'
}
const rewrites=async()=>{
  return[
    {
      source:'/cat',
      destination:"https://www.google.com"
    }
  ]
}

  return{reactStrictMode: true,rewrites,env}
}

module.exports= nextConfig
