import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Notification({ number = 0 }) {
    return (
        <div className='max-w-10 cursor-pointer font-poppins'>
            <p className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-10 text-center text-Light'>{number}</p>
            <IoIosNotificationsOutline className='text-[#858585] text-4xl bg-white' />
        </div>
    )
}
