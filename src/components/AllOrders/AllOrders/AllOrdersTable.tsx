import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllOrdersTable.module.css";
import { useEffect, useMemo, useState } from "react";

interface Person {
  name: string;
  avatar: string;
  address: string;
  products: number;
  date: string;
  price: number;
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
              src={row.original.avatar}
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
        accessorKey: "date",
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
  const data = useMemo(
    () => [
      {
        name: "Alex Shatov",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        address: "Mripur-1",
        products: 12,
        date: "July 31, 2023",
        price: 890.66,
        status: "Completed",
      },
      {
        name: "Philip Harbach",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        address: "Mripur-1",
        products: 12,
        date: "July 31, 2023",
        price: 890.66,
        status: "Completed",
      },
      {
        name: "Mirko Fisuk",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        address: "Mripur-1",
        products: 12,
        date: "July 31, 2023",
        price: 890.66,
        status: "Completed",
      },
      {
        name: "Olga Semklo",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        address: "Mripur-1",
        products: 12,
        date: "July 31, 2023",
        price: 890.66,
        status: "Completed",
      },
      {
        name: "Burak Long",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        address: "Mripur-1",
        products: 12,
        date: "July 31, 2023",
        price: 890.66,
        status: "Completed",
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery, data]);

  const table = useReactTable({
    data: filteredData,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
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
                  style={{ width: header.getSize() }}
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
      {filteredData.length === 0 && (
        <div className={css.noResults}>
          No results found for your search query.
        </div>
      )}
    </>
  );
};

export default AllOrdersTable;
