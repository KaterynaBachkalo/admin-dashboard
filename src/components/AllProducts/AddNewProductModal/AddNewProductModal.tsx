import { FC, useEffect, useRef, useState } from "react";
import css from "./AddNewProductModal.module.css";
import Icon from "../../Icon";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "../../Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/admin/operation";
import { AppDispatch } from "../../../redux/store";

interface AddModalProps {
  onClose: () => void;
}

interface IForms {
  name: string;
  category: string;
  suppliers: string;
  stock: number;
  price: number;
}

interface IFormsToBD {
  name: string;
  category: string;
  suppliers: string;
  stock: string;
  price: string;
}

const AddNewProductModal: FC<AddModalProps> = ({ onClose }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const iconref = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      name: yup.string().required("Product info is required"),
      category: yup.string().required("Category is required"),
      suppliers: yup.string().required("Suppliers is required"),
      stock: yup
        .number()
        .typeError("Stock is required and must be a number")
        .required(),
      price: yup
        .number()
        .typeError("Price is required and must be a number")
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("category", selectedFilter);
  }, [selectedFilter, setValue]);

  const onSubmit = (data: IForms) => {
    const newProduct: IFormsToBD = {
      name: data.name,
      category: data.category,
      suppliers: data.suppliers,
      stock: data.stock.toString(),
      price: data.price.toString(),
    };

    dispatch(addProduct(newProduct));
    onClose();
  };

  const handleSelect = (selected: string) => {
    setSelectedFilter(selected);
    setOpenDropdown(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div>
            <input
              {...register("name")}
              className={css.input}
              placeholder="Product info"
            />
            <p className={css.errormessage}>{errors.name?.message}</p>
          </div>

          <div className={css.inputWrap}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Category"
                  value={selectedFilter}
                />
              )}
            />
            {!selectedFilter && (
              <p className={css.errormessage}>{errors.category?.message}</p>
            )}

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
                onClose={setOpenDropdown}
                ref={iconref}
              />
            )}
          </div>

          <div>
            <input
              {...register("suppliers")}
              className={css.input}
              placeholder="Suppliers"
            />
            <p className={css.errormessage}>{errors.suppliers?.message}</p>
          </div>

          <div>
            <input
              {...register("stock")}
              className={css.input}
              placeholder="Stock"
              type="number"
            />
            <p className={css.errormessage}>{errors.stock?.message}</p>
          </div>

          <div>
            <input
              {...register("price")}
              className={css.input}
              placeholder="Price"
              type="number"
            />
            <p className={css.errormessage}>{errors.price?.message}</p>
          </div>
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
