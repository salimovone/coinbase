import { Routes, Route } from 'react-router-dom'
import Test from '../pages/Test';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Test />} />
        </Routes>
    )
}

export default Router;