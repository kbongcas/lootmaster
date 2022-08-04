import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user-context";

const PrivateRoutes = () => {
    const { currentUser } = useContext(UserContext);
    return(
        currentUser ?  <Outlet/> : <Navigate to="/signin"/>
    )
}

export default PrivateRoutes;