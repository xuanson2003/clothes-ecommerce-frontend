import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Layouts/Header/Header';
import { publicRoutes } from './Routes/routes';
import Footer from './Layouts/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    {publicRoutes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.component} />
                    ))}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
