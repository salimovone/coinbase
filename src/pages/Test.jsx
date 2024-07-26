import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import ProfileView from '../components/ProfileView/ProfileView'
import Notification from '../components/Notification'
import { profileImage } from '../assets'

export default function Test() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className='flex flex-col gap-36 mt-10 ms-5'>
                <SearchBar />
                <ProfileView img={profileImage} fullName={'Ramon Ridwan'} />
                <Notification />
            </div>
        </div>
    )
}
