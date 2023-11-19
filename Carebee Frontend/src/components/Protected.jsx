import { Outlet, Navigate } from 'react-router-dom';

const Protected = () => {
    const token = localStorage.getItem('Token');
    const auth = `Bearer ${token}`;

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
};

export default Protected;
