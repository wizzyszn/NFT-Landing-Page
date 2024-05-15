import React from 'react'
import img1 from '../assets/images/34607-346 1.png'
import CollectionCards from './CollectionCards'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const buttonCard = ['All', 'Abstract', 'Meme', 'Music', '3D Art', 'Games']

export default function Collections () {
  return (
    <div className='  mt-[10%]'>
      <h1 className=' text-center text-4xl'>TRENDING NFT COLLECTION</h1>
      <div className=' flex flex-col gap-4'>
        <div className=' flex justify-center gap-8 mt-7'>
          {buttonCard.map((elem, index) => {
            return (
              <button
                className=' zero pt-3 pb-3 pl-6  pr-6 bg-transparent border border-gray-600 rounded-md text-gray-400 '
                key={index}
              >
                {elem}{' '}
              </button>
            )
          })}
        </div>
        <CollectionCards />
      </div>
      <div className=' grid grid-cols-2 mt-9 items-center justify-items-center'>
        <div className=' flex flex-col gap-4 w-[60%]'>
          <h1 className=' text-5xl'>HOW TO SELL AND BUY YOUR NFTS</h1>
          <p className=' TT tracking-tight'>
            Buy Your NFTs, Trade until the bergins. Take on the role of the
            character you have, develop the role further. Find out how strong
            you are on the battlefield. Complete missions solo and with other
            NFT owners to gain more power. Finally rise to championship.
          </p>
          <div className=' relative bg-[#FFAC03]  w-[10rem] h-[4rem] rounded-md z-50 mt-5'>
            <motion.div
              whileTap={{ x: 12, y: 8 }}
              className=' absolute bg-[#060C03] w-[10rem] h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'
            >
              <Link>PLACE A BID</Link>
            </motion.div>
          </div>
        </div>
        <div>
          <img src={img1} alt='img' />
        </div>
      </div>
    </div>
  )
}
