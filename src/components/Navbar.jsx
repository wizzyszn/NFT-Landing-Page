import React from 'react'
import NftLogo from '../assets/logos/Mask group.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Navbar() {
  return (
    <div className=' flex items-center justify-between  '>
        <div><img src={NftLogo} alt="logo" /></div>
        <div className=' flex gap-16 text-lg max-sm:hidden'> 
            <Link>HOME</Link>
            <Link>MARKETPLACE</Link>
            <Link>ART</Link>
            <Link>ARTIST</Link>
        </div>
        <div className=' relative bg-[#FFAC03]  w-[10rem] h-[4rem] rounded-md z-50 max-sm:hidden'>
          <motion.div whileTap={{x : 12, y: 8}}
              className=' absolute bg-[#060C03] w-[10rem] h-[4rem] bottom-2 rounded-md right-3 border border-[#FFAC03] flex items-center justify-center cursor-pointer text-[#FFAC03]'><Link>DISCOVER</Link></motion.div>
        </div>
    </div>   
  )
}
