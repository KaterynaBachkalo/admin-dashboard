import React, { useEffect, useState } from "react";
import css from "./ContainerStyles.module.css";
import FilterForm from "../components/FilterForm/FilterForm";
import AllOrdersTable from "../components/AllOrders/AllOrdersTable";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchOrders } from "../redux/admin/operation";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectTotalOrders } from "../redux/admin/selectors";
import RenderPaginationDots from "../components/Pagination/RenderPaginationDots";
import { setCurrentPage } from "../redux/admin/adminSlice";

const AllOrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch() as AppDispatch;
  const currentPage = useSelector(selectCurrentPage);

  const totalOrders = useSelector(selectTotalOrders);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  useEffect(() => {
    const params: { page: number; limit: number; name?: string } = {
      page: currentPage,
      limit: 5,
      ...(searchQuery && { name: searchQuery }),
    };

    dispatch(fetchOrders(params));
  }, [currentPage, dispatch, searchQuery]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchQuery, dispatch]);

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="User name" />
      <AllOrdersTable searchQuery={searchQuery} />
      <RenderPaginationDots
        currentPage={currentPage}
        total={totalOrders}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default AllOrdersPage;
