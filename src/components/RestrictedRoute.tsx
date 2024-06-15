import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/auth/selectors";

interface IProps {
  component: any;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const authenticated = useSelector(selectIsAuthenticated);

  return authenticated ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;
