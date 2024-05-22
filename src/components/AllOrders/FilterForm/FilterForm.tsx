import css from "./FilterForm.module.css";

import { useForm } from "react-hook-form";

import Icon from "../../Icon";

interface IForms {
  name: string;
}

const FilterForm = () => {
  const { register, handleSubmit } = useForm<IForms>();
  const onSubmit = (data: IForms) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrap}>
        <input
          {...register("name")}
          className={css.input}
          placeholder="User Name"
        />

        <button type="submit" className={css.button}>
          <div className={css.icon}>
            <Icon name="filter" width={14} height={14} />
          </div>
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
