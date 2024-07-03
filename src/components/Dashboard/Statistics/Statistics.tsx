import { useSelector } from "react-redux";
import Icon from "../../Icon";
import css from "./Statistics.module.css";
import {
  selectTotalProducts,
  selectTotalSuppliers,
  selectTotalCustomers,
} from "../../../redux/admin/selectors";

const Statistics = () => {
  const totalProducts = useSelector(selectTotalProducts);
  const totalSuppliers = useSelector(selectTotalSuppliers);
  const totalCustomers = useSelector(selectTotalCustomers);

  return (
    <div className={css.cells}>
      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="coins" />
          <p className={css.text}>All products</p>
        </div>
        <p className={css.number}>{totalProducts - 1}</p>
      </div>

      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="customers" />
          <p className={css.text}>All suppliers</p>
        </div>
        <p className={css.number}>{totalSuppliers}</p>
      </div>

      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="customers" />
          <p className={css.text}>All customers</p>
        </div>
        <p className={css.number}>{totalCustomers}</p>
      </div>
    </div>
  );
};

export default Statistics;
