import React from 'react'
import approval from '../assets/Approval.png'
import {BiArrowBack} from 'react-icons/bi' 
import { Link } from 'react-router-dom'

const Verified = () => {
  return (
    <div className='w-full h-screen'>
        
        <div className='w-[90%] md:w-[866px] sm:w-[674px] sm:h-[748px] items-center mx-auto my-10 sm:p-10 sm:my-auto bg-white border-[#B4B4B4]'>
            
            <div className='items-center mx-auto my-40 sm:my-20'>
                <img src={approval} alt='/' className='mx-auto' />
                <div className='text-center my-5'>
                    <h1 className='text-xl sm:text-3xl font-bold my-5'>Account created</h1>
                    <p className='mb-10 text-base text-[#4F4F4F]'>Congratulations, your account has been created successfully</p>
                    <Link to='/login' className='px-10 py-3 text-center mx-auto bg-[red] text-white text-base sm:text-lg rounded-xl'>Login to account</Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verified