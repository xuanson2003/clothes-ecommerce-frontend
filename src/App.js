import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Layouts/Header/Header';
import { publicRoutes } from './Routes/routes';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    {publicRoutes.map((item, index) => (
                        <Route path={item.path} element={item.component} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
