import React from "react";
import css from "./AllOrdersPage.module.css";
import FilterForm from "../../components/AllOrders/FilterForm/FilterForm";
import AllOrdersTable from "../../components/AllOrders/AllOrders/AllOrdersTable";

const AllOrdersPage = () => {
  return (
    <section className={css.container}>
      <FilterForm />
      <AllOrdersTable />
    </section>
  );
};

export default AllOrdersPage;
