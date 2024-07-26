import React from 'react'

function ProfileView({ img, name }) {
    return (
        <div className='flex w-72'>
            <div className='flex w-1/3'>
                <img src={img} alt="Nimadir xato ke" />
            </div>
            <div className='flex'>
                <p className='text-[#858585]'>{name}</p>
            </div>
        </div>
    )
}

export default ProfileView;