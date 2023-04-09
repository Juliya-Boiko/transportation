import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return ( !isLogged ? <Navigate to="/auth" /> : children );
};