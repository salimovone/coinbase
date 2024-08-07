import { Routes, Route } from 'react-router-dom'
import routes from './routes';

function Router() {
    return (
        <Routes>
            {/* yangi page yaratish uchun routes.js ga qara */}
            {routes.map(item=>(
                <Route element={item.element} path={item.path} key={item.key} />
            ))}
        </Routes>
    )
}

export default Router;