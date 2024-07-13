import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className=' flex gap-3 text-3xl'>
        <div className=' text-blue-700'><FaFacebook/></div>
        <div className=' text-orange-500'><FaInstagram/></div>
        <div className=' text-sky-500'><FaTwitter/></div>
    </div>
  )
}

export default Icons