import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllOrdersTable.module.css";

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
        accessorKey: "info",
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

const AllOrdersTable = () => {
  const data = [
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
      name: "Alex Shatov",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      address: "Mripur-1",
      products: 12,
      date: "July 31, 2023",
      price: 890.66,
      status: "Completed",
    },
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
      name: "Alex Shatov",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      address: "Mripur-1",
      products: 12,
      date: "July 31, 2023",
      price: 890.66,
      status: "Completed",
    },
    {
      name: "Alex Shatov",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      address: "Mripur-1",
      products: 12,
      date: "July 31, 2023",
      price: 890.66,
      status: "Completed",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
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
                    className={css.row}
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllOrdersTable;
