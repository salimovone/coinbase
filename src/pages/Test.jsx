import React from 'react'
import SearchBar from '../components/SearchBar'
import ProfileView from '../components/ProfileView'
import { profileImage } from '../assets'

export default function Test() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <SearchBar />
            <ProfileView img={profileImage} fullName={'Ramon Ridwan'} />
        </div>
    )
}
