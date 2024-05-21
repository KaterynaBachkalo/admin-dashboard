import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./RecentCustomers.module.css";

interface Person {
  name: string;
  email: string;
  spent: number;
  avatar: string;
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
            {row.original.name}
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
  const data = [
    {
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      spent: 2890.66,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      spent: 2767.04,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      spent: 2996.0,
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      spent: 1220.66,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Burak Long",
      email: "longburak@gmail.com",
      spent: 1890.66,
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
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
                  <td key={cell.id} className={css.row}>
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

export default RecentCustomersTable;
