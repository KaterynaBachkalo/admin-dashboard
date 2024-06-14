import css from "./DasboardPage.module.css";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import RecentCustomers from "../../components/Dashboard/RecentCustomers/RecentCustomers";
import IncomeExpenses from "../../components/Dashboard/IncomeExpenses/IncomeExpenses";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchData } from "../../redux/admin/operation";

const DasboardPage = () => {
  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <Statistics />
      <div className={css.tables}>
        <RecentCustomers />
        <IncomeExpenses />
      </div>
    </section>
  );
};

export default DasboardPage;
