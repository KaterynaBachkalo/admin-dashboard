import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm/FilterForm";
import css from "./ContainerStyles.module.css";
import AddNewProduct from "../components/AllProducts/AddNewProduct/AddNewProduct";
import AllProductsTable from "../components/AllProducts/AllProductsTable/AllProductsTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../redux/admin/selectors";
import { fetchProducts } from "../redux/admin/operation";

const AllProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchProducts(params));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="Product Name" />
      <AddNewProduct />
      <AllProductsTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllProductsPage;
