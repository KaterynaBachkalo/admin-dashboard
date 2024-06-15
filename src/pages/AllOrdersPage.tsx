import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AllOrdersTable from "../components/AllOrders/AllOrdersTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchOrders } from "../redux/admin/operation";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../redux/admin/selectors";

const AllOrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchOrders(params));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="User name" />
      <AllOrdersTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllOrdersPage;
