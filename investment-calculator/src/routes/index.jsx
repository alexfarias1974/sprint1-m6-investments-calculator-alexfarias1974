import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
)

export default RoutesMain;