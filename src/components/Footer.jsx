import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logos/Mask group.png"

export default function Footer() {
  return (
    <div>
        <div className=' flex justify-between border-b border-gray-500  p-4 mt-28 items-center max-sm:flex-col'>
            <div><img src={logo} alt="logo" /></div>
            <div className=' flex gap-9 max-sm:gap-3'>
            <Link>About</Link>
            <Link>Company</Link>
            <Link>Support</Link>
            <Link>Movement</Link>
            </div>
        </div>
        <div className=' flex justify-between TT text-gray-400 p-4 items-center mt-6'>
            <p>@2022VR. All rights reserved </p>
            <div className=' flex gap-3'>
                <p>Terms & Agreements</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  ) 
}
