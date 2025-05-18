import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    // Load users with search filter
    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://e-matrimony-server-side.vercel.app/dashboard/manage-users?search=${search}`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Fetch users whenever search changes
    useEffect(() => {
        fetchUsers();
    }, [search]);

    const handleMakeAdmin = async (id) => {
        await fetch(`https://e-matrimony-server-side.vercel.app/dashboard/make-admin/${id}`, { method: 'PATCH' });
        fetchUsers(); // Refresh users
    };

    const handleMakePremium = async (id) => {
        await fetch(`https://e-matrimony-server-side.vercel.app/dashboard/make-premium/${id}`, { method: 'PATCH' });
        fetchUsers(); // Refresh users
    };

    return (
        <div className="p-6">
            <Helmet>
                <title>Manage Users</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name"
                className="border p-2 rounded mb-4 w-full max-w-md"
            />

            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Make Admin</th>
                        <th className="p-2">Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => handleMakeAdmin(user._id)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded"
                                >
                                    Make Admin
                                </button>
                            </td>
                            <td className="p-2">
                                <button
                                    onClick={() => handleMakePremium(user._id)}
                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                >
                                    Make Premium
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ManageUsers;
