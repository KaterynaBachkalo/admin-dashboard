import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./RecentCustomers.module.css";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectCustomers,
  selectIsLoading,
} from "../../../redux/admin/selectors";
import Loader from "../../Loader/Loader";

interface Person {
  name: string;
  email: string;
  spent: string;
  avatar: string | undefined;
}

const columns: ColumnDef<Person>[] = [
  {
    header: "Recent Customers",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <div className={css.cellWrap}>
            <img
              src={row.original.avatar}
              alt={row.original.name}
              className={css.avatar}
            />
            <p className={css.name}>{row.original.name}</p>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "email",
        header: "Email",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "spent",
        header: "Spent",
        footer: (props) => props.column.id,
      },
    ],
  },
];

const RecentCustomersTable = () => {
  const isLoading = useSelector(selectIsLoading);

  const customers = useSelector(selectCustomers);

  const myCustomers = customers
    .map((customer) => {
      return {
        avatar: customer.image || customer.photo,
        name: customer.name,
        email: customer.email,
        spent: customer.spent,
      };
    })
    .slice(-5);

  const data = useMemo(() => myCustomers, [myCustomers]);

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
    <>
      <table className={css.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr
              key={headerGroup.id}
              className={index === 0 ? css.header : css.subheader}
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={index === 0 ? css.header : css.subheader}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const cellValue = cell.getValue() as string;
                  return (
                    <td
                      key={cell.id}
                      title={cellValue}
                      className={`${css.row} ${
                        cell.column.id === "name"
                          ? css["col-name"]
                          : cell.column.id === "email"
                          ? css["col-email"]
                          : cell.column.id === "spent"
                          ? css["col-spent"]
                          : ""
                      }`}
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isLoading && data.length === 0 && <Loader />}
    </>
  );
};

export default RecentCustomersTable;
