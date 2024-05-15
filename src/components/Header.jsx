import React from 'react'
import online from '../assets/logos/Group 35078.png'
import  outside from '../assets/vectors/Ellipse 783.png'
import  inner from '../assets/vectors/Ellipse 785.png'
import  vector from '../assets/vectors/Vector.png'
import EclispeBlack from '../assets/vectors/Ellipse 784.png'
import Arrow from '../assets/vectors/arrow-up.png'
import Head from '../assets/images/253 1.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useTime from '../assets/hooks/useTime'
export default function Header () {
  const {hour,seconds,minute} = useTime();
  console.log("hour : ", hour)
  console.log("minute : ", minute)
  console.log("seconds : ", seconds)
  return (
    <header className=' grid grid-cols-2 mt-20 '>
      <div className=' w-full'>
        <h1 className=' text-8xl col-span-1 w-[95%]'>
          COLLECT AND SELL DIGITAL ART
        </h1>
      </div>
      <div className=' flex flex-col gap-4 '>
        <div className='grid grid-cols-3'>
          <div className=' flex flex-col gap-3'>
            <h1 className=' zero text-[#40C72A] text-4xl tracking-wider'>
              100K+
            </h1>
            <p className=' TT text-xl text-gray-200'>Customers</p>
          </div>
          <div className=' flex flex-col gap-3'>
            <h1 className=' zero text-[#40C72A] text-4xl tracking-wider'>
              32K+
            </h1>
            <p className=' TT text-xl text-gray-200'>Artwork</p>
          </div>
          <div className=' flex flex-col gap-3'>
            <h1 className=' zero text-[#40C72A] text-4xl tracking-wider'>
              12K+
            </h1>
            <p className='TT text-xl text-gray-200'>Owner </p>
          </div>
        </div>
        <p className=' TT  w-[45%] text-gray-200'>
          NFT Sea is a Clean, Professional and complete NFT Marketplace
        </p>
        <div className=' flex items-center gap-4'>
          <img src={online} alt='online' />{' '}
          <div className=' flex items-center gap-2'>
            <div className=' h-[10px] w-[10px] rounded-full bg-green-500 '></div>
            <p className='TT text-xl text-gray-200'>Actve Customers</p>
          </div>{' '}
        </div>
      </div>
      <div className='col-span-2 '>
        <h2 className='text-center text-[12em]  mask text-transparent '>
          NFT COLLECTIONS
        </h2>
      </div>
      <div className=' col-span-1 flex flex-col gap-7 ml-9 '>
          <p className=' TT w-[50%] tracking-wider text-xl'>
            In Short NFTs are non-fungible tokens, Where fungible means
            replaceable and tokens are generally assets.
          </p>
          <div className=' relative ml-10'>
          <img className=' absolute left-11 z-10 top-11 ' src={inner} alt="logo" />
            <img className=' absolute left-[-40px]'  src={outside} alt="logo"/>
            <img className=' absolute ' src={EclispeBlack} alt="logo" />
            <img className=' absolute left-[10px] top-2' src={vector} alt="logo" />
            <img className=' absolute z-20 top-14 left-14' src={Arrow} alt="logo" />
          </div>
        </div>
        <div className='absolute left-[33%] top-[45%]'><img src={Head} alt="head" /></div>
        <div className=' flex flex-col gap-4 items-center ml-36'>
          <div className=' flex flex-col gap-y-2'>
            <h3 className=' text-xl'>CURRENT BID</h3>
            <h2 className=' zero text-[#40C72A] text-4xl'>23.00 ETH</h2>
            <p  className=' TT'>$40,345,00</p>
          </div>
          <div className=' flex flex-col gap-y-2'>
            <h3>AUCTION  ENDS IN</h3>
            <div className=' flex gap-3'>
              <div className=' flex flex-col gap-2 items-center justify-center'>  <h3 className=' zero text-[#40C72A] text-4xl'>{hour}</h3> <span className=' TT'>Hours</span></div>
              <div className=' flex flex-col gap-2 items-center justify-center'>  <h3 className=' zero text-[#40C72A] text-4xl'>{minute}</h3> <span className=' TT'>Minutes</span></div>
              <div className=' flex flex-col gap-2 items-center justify-center'>  <h3 className=' zero text-[#40C72A] text-4xl'>{seconds}</h3> <span className=' TT'>Seconds</span></div>
             
            </div>
          </div>
          <div className=' relative bg-[#FFAC03]  w-[10rem] h-[4rem] rounded-md z-50 mt-10'>
          <motion.div whileTap={{x : 12, y: 8}}
              className=' absolute bg-[#060C03] w-[10rem] h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'><Link>PLACE A BID</Link></motion.div>
        </div>
        </div>
    </header>
  )
}
