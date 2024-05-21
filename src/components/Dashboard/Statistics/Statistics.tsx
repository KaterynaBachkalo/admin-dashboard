import React from "react";
import Icon from "../../Icon";
import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.cells}>
      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="coins" />
          <p className={css.text}>All products</p>
        </div>
        <p className={css.number}>8430</p>
      </div>

      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="customers" />
          <p className={css.text}>All suppliers</p>
        </div>
        <p className={css.number}>211</p>
      </div>

      <div className={css.border}>
        <div className={css.wrapText}>
          <Icon name="customers" />
          <p className={css.text}>All customers</p>
        </div>
        <p className={css.number}>140</p>
      </div>
    </div>
  );
};

export default Statistics;
