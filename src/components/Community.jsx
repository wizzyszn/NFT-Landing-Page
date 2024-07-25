import React from 'react'
import img1 from '../assets/images/23553526 1.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Community () {
  return (
    <div className=' grid grid-cols-2 bg-[#FFAC03] mt-64  relative h-[30rem] max-sm:flex max-sm:items-center'>
      <div className=' absolute top-[-120px] max-sm:top-[-200px]'>
        <img src={img1} alt='img' />
      </div>
      <div className=' flex flex-col items-center justify-center col-start-2 col-end-2'>
        <h2 className=' text-[#060C03] text-5xl max-sm:text-3xl max-sm:text-center'>FOR NFTS JOIN OUR COMMUNITY</h2>
        <div className=' relative bg-[#B27802]  w-[10rem] h-[4rem] rounded-md z-50 mt-10'>
          <motion.div whileTap={{x : 12, y: 8}}
              className=' absolute bg-[#060C03] w-[10rem] h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'><Link>PLACE A BID</Link></motion.div>
        </div>
      </div>
    </div>
  )
}
