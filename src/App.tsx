import "./styles/global.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import SideMenu from "./components/sideNav/SideNav";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";

function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <aside className='menu-container'>
            <SideMenu />
          </aside>
          <div className='content-container'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "users", element: <Users /> },
        { path: "products", element: <Products /> },
        { path: "users/:id", element: <User /> },
        { path: "products/:id", element: <Product /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
