import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Notification({ number = 0 }) {
    return (
        <div className='relative'>
            <p className='bg-#db66a2 rounded-full'>{number}</p>
            <IoIosNotificationsOutline className='text-[#858585] text-4xl bg-white' />
        </div>
    )
}
