import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectAuthAccessToken,
  selectIsAuthenticated,
} from "../redux/auth/selectors";
import { selectIsLoading } from "../redux/admin/selectors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { refreshUserThunk } from "../redux/auth/operations";

interface IProps {
  component: any;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const authenticated = useSelector(selectIsAuthenticated);

  const isloading = useSelector(selectIsLoading);

  const token = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!authenticated && token) dispatch(refreshUserThunk());
  }, [authenticated, token, dispatch]);

  if (isloading) return null;

  return authenticated ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;
