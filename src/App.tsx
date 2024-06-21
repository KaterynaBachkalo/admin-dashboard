import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { selectAuthIsLoading } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";

const AllProductsPage = lazy(() => import("./pages/AllProductsPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage"));
const AllSuppliersPage = lazy(() => import("./pages/AllSuppliersPage"));
const CustomersDataPage = lazy(() => import("./pages/CustomersDataPage"));

function App() {
  const isLoading = useSelector(selectAuthIsLoading);

  if (isLoading) {
    return <Loader />;
  }
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(refreshUserThunk());
  // }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute component={<SharedLayout />} redirectTo="/login" />
          }
        >
          <Route path="/" index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="orders" element={<AllOrdersPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="suppliers" element={<AllSuppliersPage />} />
          <Route path="customers" element={<CustomersDataPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
