import React from 'react'

function ProfileView({ img, fullName }) {
    return (
        <div className='flex w-72 h-12 items-center bg-white p-5'>
            <div className='w-1/3'>
                <img className='rounded-2xl' src={img} alt="Nimadir xato ke" />
            </div>
            <div className='flex'>
                <p className='text-[#858585] ms-5 leading-normal font-poppins text-md'>{fullName}</p>
            </div>
        </div>
    )
}

export default ProfileView;