import React, { useState } from "react";
import css from "./AllOrdersPage.module.css";
import FilterForm from "../../components/AllOrders/FilterForm/FilterForm";
import AllOrdersTable from "../../components/AllOrders/AllOrders/AllOrdersTable";

const AllOrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} />
      <AllOrdersTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllOrdersPage;
