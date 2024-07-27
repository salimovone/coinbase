import { Routes, Route } from 'react-router-dom'
import MainDashboard from '../pages/MainDashboard';
import routes from './routes';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainDashboard />} />
            {/* yangi page yaratish uchun routes.js ga qara */}
            {routes.map(item=>(
                <Route {...item} />
            ))}
        </Routes>
    )
}

export default Router;