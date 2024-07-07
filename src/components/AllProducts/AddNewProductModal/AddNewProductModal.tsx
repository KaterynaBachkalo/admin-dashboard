import { FC, useEffect, useRef, useState } from "react";
import css from "./AddNewProductModal.module.css";
import Icon from "../../Icon";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "../../Dropdown/Dropdown";
import { IProductsToBD } from "../../../types";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/admin/selectors";

interface AddModalProps {
  onClose: () => void;
  onAddProduct: (product: IProductsToBD) => void;
}

interface IForms {
  name: string;
  category: string;
  suppliers: string;
  stock: string;
  price: string;
}

const AddNewProductModal: FC<AddModalProps> = ({ onClose, onAddProduct }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [stock, setStock] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const products = useSelector(selectProducts);

  const iconref = useRef<HTMLDivElement | null>(null);

  const schema = yup
    .object({
      name: yup.string().required("Product info is required"),
      category: yup.string().required("Category is required"),
      suppliers: yup.string().required("Suppliers is required"),
      stock: yup
        .string()
        .matches(/^\d*\.?\d*$/, "Stock must be a number")
        .required("Stock is required and must be a number"),
      price: yup
        .string()
        .matches(/^\d*\.?\d*$/, "Price must be a number")
        .required("Price is required and must be a number"),
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
    const firstId = products[0].id;

    const newProduct: IProductsToBD = {
      id: firstId + 1,
      name: data.name,
      category: data.category,
      suppliers: data.suppliers,
      stock: data.stock.toString(),
      price: data.price.toString(),
    };

    // dispatch(addProduct(newProduct));
    onAddProduct(newProduct);
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
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Stock"
                  type="text"
                  value={stock}
                  onChange={(e) => {
                    const value = e.target.value.replace(",", ".");
                    if (/^\d*\.?\d*$/.test(value)) {
                      setStock(value);
                      field.onChange(value);
                    }
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
                  type="text"
                  value={price}
                  onChange={(e) => {
                    const value = e.target.value.replace(",", ".");
                    if (/^\d*\.?\d*$/.test(value)) {
                      setPrice(value);
                      field.onChange(value);
                    }
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

export default AddNewProductModal;
