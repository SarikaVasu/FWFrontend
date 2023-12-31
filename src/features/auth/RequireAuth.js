import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const { roles } = useAuth();

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/signin" state={{ from: location }} replace /> //disable back button 
    );

    return content;
}
export default RequireAuth;