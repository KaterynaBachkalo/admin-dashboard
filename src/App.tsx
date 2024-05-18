import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "./redux/authSlice";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";

const AllProductsPage = lazy(
  () => import("./pages/AllProductsPage/AllProductsPage")
);
const DasboardPage = lazy(() => import("./pages/DasboardPage/DasboardPage"));
const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage/AllOrdersPage"));
const AllSuppliersPage = lazy(
  () => import("./pages/AllSuppliersPage/AllSuppliersPage")
);
const CustomersDataPage = lazy(
  () => import("./pages/CustomersDataPage/CustomersDataPage")
);

function App() {
  // const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
        <Route
          path="/"
          element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
        >
          <Route path="dashboard" element={<DasboardPage />} />
          <Route path="orders" element={<AllOrdersPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="suppliers" element={<AllSuppliersPage />} />
          <Route path="customers" element={<CustomersDataPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
