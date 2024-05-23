import { FC } from "react";
import css from "./AddNewProductModal.module.css";
import Icon from "../../Icon";
import { useForm } from "react-hook-form";

interface AddModalProps {
  onClose: () => void;
}

interface IForms {
  productInfo: string;
  category: string;
  suppliers: string;
  stock: string;
  price: number;
}

const AddNewProductModal: FC<AddModalProps> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<IForms>();
  const onSubmit = (data: IForms) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <input
            {...register("productInfo")}
            className={css.input}
            placeholder="Product info"
          />

          <div className={css.inputWrap}>
            <input
              {...register("category")}
              className={css.input}
              placeholder="Category"
            />

            <div className={css.iconChevron}>
              <Icon name="chevron-down" width={16} height={16} />
            </div>
          </div>

          <input
            {...register("suppliers")}
            className={css.input}
            placeholder="Suppliers"
          />

          <input
            {...register("stock")}
            className={css.input}
            placeholder="Stock"
          />

          <input
            {...register("price")}
            className={css.input}
            placeholder="Price"
          />
        </div>

        <div className={css.buttonWrap}>
          <button type="submit" className={css.buttonAdd}>
            Add
          </button>

          <button type="submit" className={css.buttonCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewProductModal;
