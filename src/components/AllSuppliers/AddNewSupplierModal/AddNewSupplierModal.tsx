import { FC, useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Icon from "../../Icon";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "../../DropdownStatus/Dropdown";
import useCloseDropdown from "../../../services/closeDropdown";
import css from "./AddNewSupplierModal.module.css";
import { ISuppliersToBD } from "../../../types";
import { useSelector } from "react-redux";
import { selectSuppliers } from "../../../redux/admin/selectors";

interface AddModalProps {
  onClose: () => void;
  onAddSupplier: (supplier: ISuppliersToBD) => void;
}

interface IForms {
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: number;
  status: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const AddNewSupplierModal: FC<AddModalProps> = ({ onClose, onAddSupplier }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isOpenCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState<Value>(null);

  const suppliers = useSelector(selectSuppliers);

  const myDate = value?.toString();
  const dateArray = myDate?.split(" ").slice(1, 4);
  const formattedDateArray = dateArray && [
    `${dateArray[0]} ${dateArray[1]}`,
    dateArray[2],
  ];
  const selectedDate = formattedDateArray?.join(", ");

  const iconref = useRef<HTMLDivElement | null>(null);
  const iconDateref = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const schema = yup
    .object({
      name: yup.string().required("Suppliers Info is required"),
      address: yup.string().required("Address is required"),
      suppliers: yup.string().required("Company is required"),
      date: yup.string().required("Date is required"),
      amount: yup.number().required("Ammount is required and must be a number"),
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
  });

  const onSubmit = (data: IForms) => {
    const firstId = suppliers[0].id;

    const newSupplier: ISuppliersToBD = {
      id: firstId + 1,
      name: data.name,
      address: data.address,
      suppliers: data.suppliers,
      date: data.date,
      amount: `৳ ${data.amount.toString()}`,
      status: data.status,
    };
    onAddSupplier(newSupplier);
    onClose();
  };

  const handleSelect = (selected: string) => {
    setSelectedStatus(selected);
    setOpenDropdown(false);
  };

  useEffect(() => {
    setValue("status", selectedStatus);
    selectedDate && setValue("date", selectedDate);
  }, [selectedStatus, selectedDate, setValue]);

  useCloseDropdown(setOpenCalendar, calendarRef, iconDateref);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div>
            <input
              {...register("name")}
              className={css.input}
              placeholder="Suppliers Info"
            />
            <p className={css.errormessage}>{errors.name?.message}</p>
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
              {...register("suppliers")}
              className={css.input}
              placeholder="Company"
            />
            <p className={css.errormessage}>{errors.suppliers?.message}</p>
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
            {!selectedDate && (
              <p className={css.errormessage}>{errors.date?.message}</p>
            )}

            <div
              className={css.iconCalendar}
              onClick={() => setOpenCalendar(!isOpenCalendar)}
              ref={iconDateref}
            >
              <Icon name="calendar" width={16} height={16} />
            </div>
            {isOpenCalendar && (
              <div ref={calendarRef}>
                <Calendar
                  onChange={(date) => {
                    onChange(date);
                    setOpenCalendar(false);
                  }}
                  value={selectedDate}
                  locale="en-US"
                  className={css.calendar}
                  tileClassName={css.tile}
                  navigationLabel={({ label }) => (
                    <span className={css.label}>{label}</span>
                  )}
                  formatShortWeekday={(locale, date) =>
                    date
                      .toLocaleDateString(locale, { weekday: "short" })
                      .substring(0, 2)
                  }
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          <div>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={css.input}
                  placeholder="Amount"
                  type="number"
                  onChange={(e) => {
                    const value = e.target.value.replace(",", ".");
                    field.onChange(value);
                  }}
                />
              )}
            />

            <p className={css.errormessage}>{errors.amount?.message}</p>
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
            {!selectedStatus && (
              <p className={css.errormessage}>{errors.status?.message}</p>
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

export default AddNewSupplierModal;
