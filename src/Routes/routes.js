import config from '~/Config';
import Cart from '~/Pages/Cart';
import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import ProductCategory from '~/Pages/ProductCategory';
import ProductDetail from '~/Pages/ProductDetail';
import SignUp from '~/Pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.men, component: <ProductCategory category="men" /> },
    { path: config.routes.women, component: <ProductCategory category="women" /> },
    { path: config.routes.kid, component: <ProductCategory category="kid" /> },
    { path: config.routes.productDetail, component: <ProductDetail /> },
    { path: config.routes.login, component: <Login />, layout: null },
    { path: config.routes.signup, component: <SignUp />, layout: null },
    { path: config.routes.cart, component: <Cart /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
