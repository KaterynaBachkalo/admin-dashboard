import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllCustomersTable.module.css";
import { useEffect, useMemo, useState } from "react";

export interface Person {
  info: string;
  email: string;
  address: string;
  phone: number;
  date: string;
}

const AllCustomersTable = ({ searchQuery }: { searchQuery: string }) => {
  const columns: ColumnDef<Person>[] = [
    {
      header: "Customers Data",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "info",
          header: "User Info",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "email",
          header: "Email",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "address",
          header: "Address",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "phone",
          header: "Phone",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "date",
          header: "Register date",
          footer: (props) => props.column.id,
        },
      ],
    },
  ];

  const data = useMemo(
    () => [
      {
        info: "Alex Shatov",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: +8801736985253,
        date: "Aug 1, 2023",
      },
      {
        info: "Philip Harbach",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: +8801736985253,
        date: "Aug 1, 2023",
      },
      {
        info: "Mirko Fisuk",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: +8801736985253,
        date: "Aug 1, 2023",
      },
      {
        info: "Olga Semklo",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: +8801736985253,
        date: "Aug 1, 2023",
      },
      {
        info: "Burak Long",
        email: "alexshatov@gmail.com",
        address: "Mripur-1",
        phone: +8801736985253,
        date: "Aug 1, 2023",
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredData(
      data.filter((item) => item.info.toLowerCase().includes(lowercasedQuery))
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
                        cell.column.id === "info"
                          ? css["col-info"]
                          : cell.column.id === "category"
                          ? css["col-category"]
                          : cell.column.id === "stock"
                          ? css["col-stock"]
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

export default AllCustomersTable;
