import React from "react";
import css from "./DasboardPage.module.css";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import RecentCustomers from "../../components/Dashboard/RecentCustomers/RecentCustomers";
import IncomeExpenses from "../../components/Dashboard/IncomeExpenses/IncomeExpenses";

const DasboardPage = () => {
  return (
    <section className={css.container}>
      <Statistics />
      <RecentCustomers />
      <IncomeExpenses />
    </section>
  );
};

export default DasboardPage;
