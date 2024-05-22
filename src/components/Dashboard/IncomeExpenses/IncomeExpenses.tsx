import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./IncomeExpenses.module.css";

interface Person {
  today: string;
  col2: string;
  col3: number;
}

const columns: ColumnDef<Person>[] = [
  {
    header: "Income/Expenses",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "today",
        header: "Today",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "col2",
        header: "",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "col3",
        header: "",
        footer: (props) => props.column.id,
      },
    ],
  },
];

const IncomeExpenses = () => {
  const data = [
    {
      today: "Expense",
      col2: "Qonto billing",
      col3: -49.88,
    },
    {
      today: "Expense",
      col2: "Qonto billing",
      col3: -49.88,
    },
    {
      today: "Expense",
      col2: "Qonto billing",
      col3: -49.88,
    },
    {
      today: "Expense",
      col2: "Qonto billing",
      col3: -49.88,
    },
    {
      today: "Expense",
      col2: "Qonto billing",
      col3: -49.88,
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

export default IncomeExpenses;
