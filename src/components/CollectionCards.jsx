import React from 'react'
import NFT1 from '../assets/NFTs/1347-65 1.png'
import NFT2 from '../assets/NFTs/1347-65 2.png'
import NFT3 from '../assets/NFTs/1347-65 3.png'
import avi1 from  '../assets/Avatars/Ellipse 789.png'
import avi2 from  '../assets/Avatars/Ellipse 790.png'
import avi3 from  '../assets/Avatars/Ellipse 791.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const data = [
    {
        avatar : avi1,
        NFT : NFT1,
        email : 'cooper@gmail'
    },
    {
        avatar : avi2,
        NFT : NFT2,
        email : 'shawn@gmail'
    },
    {
        avatar : avi3,
        NFT : NFT3,
        email : 'blooper@gmail'
    },
   
    
]
export default function CollectionCards() {
  return (
    <div className=' flex justify-center gap-7'>
        {
         data.map((elem,index) =>{
            return <div key={index} className=' flex flex-col gap-2 items-center'>
                <div className=' relative'>
                <div><img src={elem.NFT} alt="nft" /></div>
                <div className=' absolute bottom-[-65px] left-[35%]'><img src={elem.avatar} alt="avi" /></div>
                </div>
                    <p className=' mt-20 TT text-xl'>{elem.email}</p>
                <div className=' relative bg-[#FFAC03]  h-[4rem] rounded-md z-50 mt-10 w-full'>
          <motion.div whileTap={{x : 12, y: 8}}
              className=' absolute bg-[#060C03] w-full h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'><Link>PLACE A BID</Link></motion.div>
        </div>
            </div>
            
         })    
        }
    </div>
  )
}
