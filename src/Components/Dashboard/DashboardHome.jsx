import { Helmet } from "react-helmet-async";

const DashboardHome = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-amber-500 p-5">Welcome My dashboard!</h1>
        </div>
    );
};
export default DashboardHome;