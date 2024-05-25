import { FC, useEffect, useRef, useState } from "react";
import css from "./EditModal.module.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "../Icon";
import Dropdown from "../Dropdown/Dropdown";
import { Suppliers } from "../AllSuppliers/AllSuppliersTable/AllSuppliersTable";

interface EditModalProps {
  data: Suppliers;
  onClose: () => void;
}

interface IForms {
  info: string;
  category: string;
  suppliers: string;
  stock: number;
  price: number;
}

const EditModal: FC<EditModalProps> = ({ data, onClose }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  // const [selectedFilter, setSelectedFilter] = useState(data.category);

  const iconref = useRef<HTMLDivElement | null>(null);

  const schema = yup
    .object({
      info: yup.string().required("Product info is required"),
      category: yup.string().required("Category is required"),
      suppliers: yup.string().required("Suppliers is required"),
      stock: yup.number().required("Stock is required"),
      price: yup
        .number()
        .typeError("Price is required and must be a number")
        .required()
        .positive("Price must be a positive number")
        .test(
          "is-decimal",
          "Price can be a decimal number",
          (value) =>
            value !== undefined && /^\d+(\.\d{1,2})?$/.test(value.toString())
        ),
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
    defaultValues: {
      info: data.info,
      // category: data.category,
      // suppliers: data.suppliers,
      // stock: data.stock,
      // price: data.price,
    },
  });

  const onSubmit = (data: IForms) => {
    console.log(data);

    onClose();
  };

  // const handleSelect = (selected: string) => {
  //   setSelectedFilter(selected);
  //   setOpenDropdown(false);
  // };

  // useEffect(() => {
  //   setValue("category", selectedFilter);
  // }, [selectedFilter, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div>
            <input
              {...register("info")}
              className={css.input}
              placeholder="Product info"
            />
            <p className={css.errormessage}>{errors.info?.message}</p>
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
                  // value={selectedFilter}
                  // onChange={(e) => setSelectedFilter(e.target.value)}
                />
              )}
            />
            <p className={css.errormessage}>{errors.category?.message}</p>

            <div
              className={css.iconChevron}
              onClick={() => setOpenDropdown(!isOpenDropdown)}
              ref={iconref}
            >
              <Icon name="chevron-down" width={16} height={16} />
            </div>
            {/* {isOpenDropdown && (
              <Dropdowndate
                // onSelect={handleSelect}
                onClose={setOpenDropdown}
                ref={iconref}
              />
            )} */}
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
            />
            <p className={css.errormessage}>{errors.stock?.message}</p>
          </div>

          <div>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Price"
                  onChange={(e) => {
                    const value = e.target.value.replace(",", ".");
                    field.onChange(value);
                  }}
                />
              )}
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

export default EditModal;
