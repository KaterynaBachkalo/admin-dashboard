import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllSuppliersTable.module.css";
import { useEffect, useMemo, useState } from "react";
import Icon from "../../Icon";
import Modal from "../../Modal/Modal";
import EditModal from "../../EditModaSupplier/EditModal";

export interface Suppliers {
  info: string;
  address: string;
  company: string;
  date: string;
  ammount: number;
  status: string;
}

const AllSuppliersTable = ({ searchQuery }: { searchQuery: string }) => {
  const columns: ColumnDef<Suppliers>[] = [
    {
      header: "All suppliers",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "info",
          header: "Suppliers Info",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "address",
          header: "Address",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "company",
          header: "Company",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "date",
          header: "Delivery date",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "ammount",
          header: "Ammount",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "status",
          header: "Status",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "action",
          header: "Action",
          cell: ({ row }) => (
            <div
              className={css.buttonEdit}
              onClick={() => openEditModal(row.original)}
            >
              <Icon name="edit" width={13} height={13} />
              Edit
            </div>
          ),
          footer: (props) => props.column.id,
        },
      ],
    },
  ];

  const data = useMemo(
    () => [
      {
        info: "Alex Shatov",
        address: "Mripur-1",
        company: "Square",
        date: "August 1, 2023",
        ammount: 6952.53,
        status: "Active",
      },
      {
        info: "Philip Harbach",
        address: "Mripur-1",
        company: "Square",
        date: "August 1, 2023",
        ammount: 6952.53,
        status: "Active",
      },
      {
        info: "Mirko Fisuk",
        address: "Mripur-1",
        company: "Square",
        date: "August 1, 2023",
        ammount: 6952.53,
        status: "Active",
      },
      {
        info: "Olga Semklo",
        address: "Mripur-1",
        company: "Square",
        date: "August 1, 2023",
        ammount: 6952.53,
        status: "Active",
      },
      {
        info: "Burak Long",
        address: "Mripur-1",
        company: "Square",
        date: "August 1, 2023",
        ammount: 6952.53,
        status: "Active",
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);
  const [editModalData, setEditModalData] = useState<Suppliers | null>(null);

  const openEditModal = (rowData: Suppliers) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

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

      {editModalData && (
        <Modal onClose={closeEditModal} title="Edit supplier">
          <EditModal onClose={closeEditModal} data={editModalData} />
        </Modal>
      )}
    </>
  );
};

export default AllSuppliersTable;
