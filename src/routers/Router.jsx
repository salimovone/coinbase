import { Routes, Route } from 'react-router-dom'
import MainDashboard from '../pages/MainDashboard';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainDashboard />} />
        </Routes>
    )
}

export default Router;