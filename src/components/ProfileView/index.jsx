import React from 'react'

function ProfileView({ img, fullName }) {
    return (
        <div className='flex w-72 h-12 items-center bg-white p-5'>
            <div className=''>
                <img className='w-12 h-12 rounded-full object-cover' src={img} alt="Nimadir xato ketdi" />
            </div>
            <div className='flex'>
                <p className='text-[#858585] ms-5 leading-normal font-poppins text-md'>{fullName}</p>
            </div>
        </div>
    )
}

export default ProfileView;