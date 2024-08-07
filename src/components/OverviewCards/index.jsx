import React from 'react'
import Card from './Card'


const data = [
    {
        id: 1,
        num: 15000,
        title: "Total Number of transactions"
    },
    {
        id: 2,
        num: 12584,
        title: "Total Number of transactions"
    },
    {
        id: 3,
        num: 9545,
        title: "Total Number of transactions"
    },
]

const OverviewCards = () => {
  return (
    <div className='mt-6 mb-8'>
        <span className="text-Secondary font-bold pb-3">Overview</span>
        <div className="cardBox grid justify-between items-center gap-8 mt-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {data.map(itm=>(
                <Card key={itm.id} {...itm} />
            ))}
        </div>
    </div>
  )
}

export default OverviewCards