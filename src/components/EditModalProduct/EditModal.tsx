import { FC, useEffect, useRef, useState } from "react";
import css from "./EditModal.module.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "../Icon";
import Dropdown from "../Dropdown/Dropdown";
import { IProducts } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { editProduct } from "../../redux/admin/operation";
import { toast } from "react-toastify";

interface EditModalProps {
  data: IProducts;
  onClose: () => void;
}

interface IForms {
  name: string;
  category: string;
  suppliers: string;
  stock: number;
  price: number;
}

const EditModal: FC<EditModalProps> = ({ data, onClose }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(data.category);

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
    defaultValues: {
      name: data.name,
      category: data.category,
      suppliers: data.suppliers,
      stock: Number(data.stock),
      price: Number(data.price),
    },
  });

  const onSubmit = (formData: IForms) => {
    const updatedProduct: IProducts = {
      ...data,
      name: formData.name,
      category: formData.category,
      suppliers: formData.suppliers,
      stock: formData.stock.toString(),
      price: formData.price.toString(),
    };
    const { _id, ...updateData } = updatedProduct;

    dispatch(editProduct({ _id: data._id, ...updateData }));
    toast.success("The product was successfully updated");
    onClose();
  };

  const handleSelect = (selected: string) => {
    setSelectedFilter(selected);
    setOpenDropdown(false);
  };

  useEffect(() => {
    setValue("category", selectedFilter);
  }, [selectedFilter, setValue]);

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
                  onChange={(e) => setSelectedFilter(e.target.value)}
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
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Stock"
                  type="number"
                  onChange={(e) => {
                    const value = e.target.value.replace(",", ".");
                    field.onChange(value);
                  }}
                />
              )}
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
                  type="number"
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
            Edit
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
