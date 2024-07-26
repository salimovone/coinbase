import React from 'react'
import SearchBar from '../components/SearchBar'

export default function MainDashboard() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <SearchBar />
            {/* menmcha absolute olib tashlasang hammasi oz orniga tushib qoladi */}
        </div>
    )
}
