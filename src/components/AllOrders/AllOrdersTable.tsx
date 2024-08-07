import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllOrdersTable.module.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsLoading, selectOrders } from "../../redux/admin/selectors";
import Loader from "../Loader/Loader";

interface Person {
  name: string;
  photo: string;
  address: string;
  products: string;
  order_date: string;
  price: string;
  status: string;
}

const columns: ColumnDef<Person>[] = [
  {
    header: "All orders",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "name",
        header: "User Info",
        cell: ({ row }) => (
          <div className={css.cellWrap}>
            <img
              src={row.original.photo}
              alt={row.original.name}
              className={css.avatar}
            />
            {row.original.name}
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "address",
        header: "Address",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "products",
        header: "Products",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "order_date",
        header: "Order date",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "price",
        header: "Price",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: "Status",
        footer: (props) => props.column.id,
      },
    ],
  },
];

const AllOrdersTable = ({ searchQuery }: { searchQuery: string }) => {
  const isLoading = useSelector(selectIsLoading);

  const orders = useSelector(selectOrders);

  const data = useMemo(() => orders, [orders]);

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
  });

  const getClassByStatus = (status: string) => {
    if (status === "Completed") return css.greenStatus;
    if (status === "Confirmed") return css.violetStatus;
    if (status === "Pending") return css.orangeStatus;
    if (status === "Processing") return css.blueStatus;
    if (status === "Cancelled") return css.redStatus;
    if (status === "Shipped") return css.roseStatus;
    return css.darkgreenStatus;
  };

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
                  return (
                    <td
                      key={cell.id}
                      className={`${css.row} ${
                        cell.column.id === "name"
                          ? css["col-name"]
                          : cell.column.id === "address"
                          ? css["col-address"]
                          : cell.column.id === "products"
                          ? css["col-products"]
                          : ""
                      }`}
                      style={{ width: cell.column.getSize() }}
                    >
                      {cell.column.id === "status" ? (
                        <span className={getClassByStatus(row.original.status)}>
                          {row.original.status}
                        </span>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
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

      {!isLoading && data.length === 0 && (
        <div className={css.noResults}>
          No results found for your search query.
        </div>
      )}
    </>
  );
};

export default AllOrdersTable;
