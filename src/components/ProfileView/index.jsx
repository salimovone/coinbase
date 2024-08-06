import React from 'react'

function ProfileView({ img, fullName }) {
    return (
        <div className='flex h-12 items-center bg-white p-5 max-sm:hidden'>
            <div className=''>
                <img className='w-8 h-8 rounded-full object-cover' src={img} alt="Nimadir xato ketdi" />
            </div>
            <div className='flex max-lg:hidden'>
                <p className='text-[#858585] ms-5 leading-normal font-poppins text-md'>{fullName}</p>
            </div>
        </div>
    )
}

export default ProfileView;