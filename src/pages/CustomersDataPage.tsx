import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AllCustomersTable from "../components/AllCustomers/AllCustomersTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  selectCurrentPage,
  selectTotalCustomers,
} from "../redux/admin/selectors";
import { fetchCustomers } from "../redux/admin/operation";
import RenderPaginationDots from "../components/Pagination/RenderPaginationDots";
import { setCurrentPage } from "../redux/admin/adminSlice";

interface IParams {
  page: number;
  limit: number;
  name?: string;
}

const CustomersDataPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  const totalCustomers = useSelector(selectTotalCustomers);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  useEffect(() => {
    const params: IParams = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchCustomers(params));
  }, [currentPage, dispatch, searchQuery]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchQuery, dispatch]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="User name" />
      <AllCustomersTable searchQuery={searchQuery} />
      <RenderPaginationDots
        currentPage={currentPage}
        total={totalCustomers}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default CustomersDataPage;
