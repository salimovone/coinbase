import React from 'react'
import OverviewCards from '../../components/OverviewCards'
import Table from '../../components/Table'

const MainDashboard = () => {
  return (
    <div className='w-full h-full bg-[#fff9fe] pt-5 px-10'>

      <div className="w-full flex justify-between items-center text-Secondary text-sm">
        <span className='font-bold'>User management system overview</span>
        <span>Accounts | Ramon Ridwan</span>
      </div>

      <OverviewCards />
      <Table />

    </div>
  )
}

export default MainDashboard