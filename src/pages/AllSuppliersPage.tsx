import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AddNewSupplier from "../components/AllSuppliers/AddNewSupplier/AddNewSupplier";
import AllSuppliersTable from "../components/AllSuppliers/AllSuppliersTable/AllSuppliersTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../redux/admin/selectors";
import { fetchSuppliers } from "../redux/admin/operation";

const AllSuppliersPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchSuppliers(params));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <section className={css.container}>
      <div className={css.wrap}>
        <FilterForm setSearchQuery={setSearchQuery} placeholder="User Name" />
        <AddNewSupplier />
      </div>
      <AllSuppliersTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllSuppliersPage;
