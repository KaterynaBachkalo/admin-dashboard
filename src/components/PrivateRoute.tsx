import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/auth/selectors";

interface IProps {
  component: any;
  redirectTo?: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const authenticated = useSelector(selectIsAuthenticated);

  return authenticated ? Component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
