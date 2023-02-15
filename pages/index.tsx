import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './user/users'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-red-500 h-[250px] w-[250px]'>1</div>
      <div className='bg-blue-500 h-[250px] w-[250px]'>2</div>
      <div className='bg-gray-500 h-[250px] w-[250px]'>3</div>
    </div>
  )
}

export default Home
