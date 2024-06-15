import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AllCustomersTable from "../components/AllCustomers/AllCustomersTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectCurrentPage } from "../redux/admin/selectors";
import { fetchCustomers } from "../redux/admin/operation";

const CustomersDataPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchCustomers(params));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="User name" />
      <AllCustomersTable searchQuery={searchQuery} />
    </section>
  );
};

export default CustomersDataPage;
