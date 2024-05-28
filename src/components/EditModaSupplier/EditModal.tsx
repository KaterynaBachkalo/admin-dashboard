import { FC, useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "../Icon";
import Dropdown from "../DropdownStatus/Dropdown";
import { Suppliers } from "../AllSuppliers/AllSuppliersTable/AllSuppliersTable";
import css from "./EditModal.module.css";

interface EditModalProps {
  data: Suppliers;
  onClose: () => void;
}

interface IForms {
  info: string;
  address: string;
  company: string;
  date: string;
  ammount: number;
  status: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EditModal: FC<EditModalProps> = ({ data, onClose }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(data.status);
  const [isOpenCalendar, setOpenCalendar] = useState(false);

  const [value, onChange] = useState<Value>(new Date());

  const myDate = value?.toString();

  const dateArray = myDate?.split(" ").slice(1, 4);

  const formattedDateArray = dateArray && [
    `${dateArray[0]} ${dateArray[1]}`,
    dateArray[2],
  ];
  const selectedDate = formattedDateArray?.join(", ");

  const iconref = useRef<HTMLDivElement | null>(null);
  const iconDateref = useRef<HTMLDivElement | null>(null);

  const schema = yup
    .object({
      info: yup.string().required("Suppliers Info is required"),
      address: yup.string().required("Address is required"),
      company: yup.string().required("Company is required"),
      date: yup.string().required("Date is required"),
      ammount: yup
        .number()
        .positive("Ammount must be a positive number")
        .required("Ammount is required"),
      status: yup.string().required("Status is required"),
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
      address: data.address,
      company: data.company,
      date: data.date,
      ammount: data.ammount,
      status: data.status,
    },
  });

  const onSubmit = (data: IForms) => {
    console.log(data);

    onClose();
  };

  const handleSelect = (selected: string) => {
    setSelectedStatus(selected);
    setOpenDropdown(false);
  };

  useEffect(() => {
    setValue("status", selectedStatus);
  }, [selectedStatus, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div>
            <input
              {...register("info")}
              className={css.input}
              placeholder="Suppliers Info"
            />
            <p className={css.errormessage}>{errors.info?.message}</p>
          </div>

          <div>
            <input
              {...register("address")}
              className={css.input}
              placeholder="Address"
            />
            <p className={css.errormessage}>{errors.address?.message}</p>
          </div>

          <div>
            <input
              {...register("company")}
              className={css.input}
              placeholder="Company"
            />
            <p className={css.errormessage}>{errors.company?.message}</p>
          </div>

          <div className={css.inputWrap}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Delivery date"
                  value={selectedDate}
                />
              )}
            />
            <p className={css.errormessage}>{errors.status?.message}</p>

            <div
              className={css.iconCalendar}
              onClick={() => setOpenCalendar(!isOpenCalendar)}
              ref={iconDateref}
            >
              <Icon name="calendar" width={16} height={16} />
            </div>
            {isOpenCalendar && (
              <div>
                <Calendar
                  onChange={(date) => {
                    onChange(date);
                    console.log("date", date);
                    setOpenCalendar(false);
                  }}
                  value={value}
                  locale="en-US"
                  ref={iconDateref}
                  className={css.calendar}
                  tileClassName={css.tile}
                  navigationLabel={({ label }) => (
                    <span className={css.label}>{label}</span>
                  )}
                />
              </div>
            )}
          </div>

          <div>
            <input
              {...register("ammount")}
              className={css.input}
              placeholder="Ammount"
            />
            <p className={css.errormessage}>{errors.ammount?.message}</p>
          </div>

          <div className={css.inputWrap}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                />
              )}
            />
            <p className={css.errormessage}>{errors.status?.message}</p>

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

          {/* <div>
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
          </div> */}
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
