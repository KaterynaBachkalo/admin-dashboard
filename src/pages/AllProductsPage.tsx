import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm/FilterForm";
import css from "./ContainerStyles.module.css";
import AddNewProduct from "../components/AllProducts/AddNewProduct/AddNewProduct";
import AllProductsTable from "../components/AllProducts/AllProductsTable/AllProductsTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectTotalProducts,
} from "../redux/admin/selectors";
import { fetchProducts } from "../redux/admin/operation";
import RenderPaginationDots from "../components/Pagination/RenderPaginationDots";
import { setCurrentPage } from "../redux/admin/adminSlice";

const AllProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(selectCurrentPage);

  const totalProducts = useSelector(selectTotalProducts);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchProducts(params));
  }, [currentPage, dispatch, searchQuery]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchQuery, dispatch]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="Product Name" />
      <AddNewProduct />
      <AllProductsTable searchQuery={searchQuery} />
      <RenderPaginationDots
        currentPage={currentPage}
        total={totalProducts - 1}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default AllProductsPage;
