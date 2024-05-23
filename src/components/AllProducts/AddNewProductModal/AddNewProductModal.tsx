import { FC, useRef, useState } from "react";
import css from "./AddNewProductModal.module.css";
import Icon from "../../Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { categories } from "../../../data/categories";
import { nanoid } from "nanoid";
import useCloseDropdown from "../../../services/closeDropdown";
import Dropdown from "../../Dropdown/Dropdown";

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
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const dropdownref = useRef<HTMLDivElement | null>(null);
  const iconref = useRef<HTMLDivElement | null>(null);

  const schema = yup
    .object({
      productInfo: yup.string().required("Product info is required"),
      category: yup.string().required("Category is required"),
      suppliers: yup.string().required("Suppliers is required"),
      stock: yup.string().required("Stock is required"),
      price: yup
        .number()
        .typeError("Price is required and must be a number")
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForms) => {
    console.log(data);
    reset();
  };

  const handleSelect = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);
    // dispatch(setFilter(selectedFilter));
  };

  useCloseDropdown(onClose, dropdownref, iconref);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <input
            {...register("productInfo")}
            className={css.input}
            placeholder="Product info"
          />
          <p className={css.errormessage}>{errors.productInfo?.message}</p>

          <div className={css.inputWrap}>
            <input
              {...register("category")}
              className={css.input}
              placeholder="Category"
              value={selectedFilter}
            />
            <p className={css.errormessage}>{errors.category?.message}</p>

            <div
              className={css.iconChevron}
              onClick={() => setOpenDropdown(!isOpenDropdown)}
              ref={iconref}
            >
              <Icon name="chevron-down" width={16} height={16} />
            </div>

            {isOpenDropdown && (
              <Dropdown
                onSelect={handleSelect}
                onClose={onClose}
                ref={iconref}
              />
            )}
          </div>

          <input
            {...register("suppliers")}
            className={css.input}
            placeholder="Suppliers"
          />
          <p className={css.errormessage}>{errors.suppliers?.message}</p>

          <input
            {...register("stock")}
            className={css.input}
            placeholder="Stock"
          />
          <p className={css.errormessage}>{errors.stock?.message}</p>

          <input
            {...register("price")}
            className={css.input}
            placeholder="Price"
            type="number"
          />
          <p className={css.errormessage}>{errors.price?.message}</p>
        </div>

        <div className={css.buttonWrap}>
          <button type="submit" className={css.buttonAdd}>
            Add
          </button>

          <button type="button" className={css.buttonCancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewProductModal;
