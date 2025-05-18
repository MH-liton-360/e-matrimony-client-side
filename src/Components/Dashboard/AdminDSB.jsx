import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AdminDSB = () => {
    const [stats, setStats] = useState({
        total: 0,
        male: 0,
        female: 0,
        premium: 0,
        revenue: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const endpoints = {
                    total: '/dashboard/total-biodata',
                    male: '/dashboard/male-biodata',
                    female: '/dashboard/female-biodata',
                    premium: '/dashboard/premium-biodata',
                    revenue: '/dashboard/revenue',
                };

                const results = await Promise.all(
                    Object.entries(endpoints).map(async ([key, url]) => {
                        const res = await fetch(url);
                        const data = await res.json();
                        return { key, value: Object.values(data)[0] };
                    })
                );

                const newStats = results.reduce((acc, { key, value }) => {
                    acc[key] = value;
                    return acc;
                }, {});

                setStats(newStats);
            } catch (error) {
                console.error("Error fetching dashboard stats:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="px-4 py-6">
            <Helmet>
                <title>Admin Dashboard</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6">Admin Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Biodata" value={stats.total} bgColor="bg-blue-600" />
                <StatCard title="Male Biodata" value={stats.male} bgColor="bg-green-600" />
                <StatCard title="Female Biodata" value={stats.female} bgColor="bg-pink-500" />
                <StatCard title="Premium Biodata" value={stats.premium} bgColor="bg-yellow-500" />
                <StatCard title="Total Revenue" value={`${stats.revenue}`} bgColor="bg-purple-600" />
            </div>
        </div>
    );
};

const StatCard = ({ title, value, bgColor }) => (
    <div className={`rounded-lg p-6 text-white shadow-md ${bgColor}`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
    </div>
);

export default AdminDSB;
