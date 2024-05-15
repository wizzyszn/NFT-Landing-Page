import React from 'react'
import artist1 from '../assets/People/235- 1.png'
import artist2 from '../assets/People/235- 2.png'
import artist3 from '../assets/People/235- 3.png'
import artist4 from '../assets/People/235- 4.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const data = [
  {
    artist: artist1,
    name: 'DEVON LANE',
    number: '60 Artwork'
  },
  {
    artist: artist2,
    name: 'FLOYD MILES',
    number: '48 Artwork'
  },
  {
    artist: artist3,
    name: 'JACOB JONES',
    number: '58 Artwork'
  },
  {
    artist: artist4,
    name: 'ROBERT FOX',
    number: '72 Artwork'
  }
]
export default function Artists () {
  return (
    <div className=' flex flex-col gap-9'>
      <h1 className=' text-center text-5xl'>FIND THE TOP NFT ARTIST</h1>
      <div className=' w-[20%] m-auto p-1 flex gap-1  bg-[#FFAC03] rounded-md'>
        <button className=' text-[#FFAC03] p-4 bg-[#060C03] flex-1 rounded-md'>
          POPULAR
        </button>
        <button className=' text-[#060C03] p-4 bg-[#FFAC03] flex-1 rounded-md'>
          fOLLOWING
        </button>
      </div>
      <div className=' flex gap-8 justify-center'>
        {data.map((elem, index) => {
          return (
            <div key={index} className=' flex flex-col items-center gap-3'>
              <div>
                <img src={elem.artist} alt='artists' />
              </div>
              <h4 className=' text-2xl'>{elem.name}</h4>
              <p className=' TT'>{elem.number}</p>
              <div className=' relative bg-[#FFAC03]  w-full h-[4rem] rounded-md z-50 mt-5'>
                <motion.div
                  whileTap={{ x: 12, y: 8 }}
                  className=' absolute bg-[#060C03] w-full h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'
                >
                  <Link>FOLLOW</Link>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
