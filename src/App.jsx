import React from 'react'
import Router from "./routers/Router"
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className='App'> {/* shu div body vazifasini bajaradi (cssga qarab kor) */}
        <Navbar /> {/* navbarda position fixed ishlatilgan, gridga tasir korsatmaydi*/}
        <div className="Sidebar w-full bg-red-600 pt-14">
          <SideBar />
        </div>
        <div className="w-full bg-sky-500 pt-14">
            <Router />
        </div>
    </div>
  )
}

export default App