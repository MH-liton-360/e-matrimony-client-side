import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar";

const Authentication = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Authentication;