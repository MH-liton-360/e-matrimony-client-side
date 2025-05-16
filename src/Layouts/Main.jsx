import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar";
import Footer from "../Pages/Home/Home/Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;