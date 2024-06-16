import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AddNewSupplier from "../components/AllSuppliers/AddNewSupplier/AddNewSupplier";
import AllSuppliersTable from "../components/AllSuppliers/AllSuppliersTable/AllSuppliersTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectTotalSuppliers,
} from "../redux/admin/selectors";
import { fetchSuppliers } from "../redux/admin/operation";
import RenderPaginationDots from "../components/Pagination/RenderPaginationDots";
import { setCurrentPage } from "../redux/admin/adminSlice";

const AllSuppliersPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  const totalSuppliers = useSelector(selectTotalSuppliers);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchSuppliers(params));
  }, [currentPage, dispatch, searchQuery]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchQuery, dispatch]);

  return (
    <section className={css.container}>
      <div className={css.wrap}>
        <FilterForm setSearchQuery={setSearchQuery} placeholder="User Name" />
        <AddNewSupplier />
      </div>
      <AllSuppliersTable searchQuery={searchQuery} />
      <RenderPaginationDots
        currentPage={currentPage}
        total={totalSuppliers}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default AllSuppliersPage;
