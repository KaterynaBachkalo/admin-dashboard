import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import css from "./AllSuppliersTable.module.css";
import { useMemo, useState } from "react";
import Icon from "../../Icon";
import Modal from "../../Modal/Modal";
import EditModal from "../../EditModaSupplier/EditModal";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectSuppliers,
} from "../../../redux/admin/selectors";
import { ISuppliers } from "../../../types";
import Loader from "../../Loader/Loader";

const AllSuppliersTable = ({ searchQuery }: { searchQuery: string }) => {
  const isLoading = useSelector(selectIsLoading);

  const suppliers = useSelector(selectSuppliers);

  const columns: ColumnDef<ISuppliers>[] = [
    {
      header: "All suppliers",
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: "name",
          header: "Suppliers Info",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "address",
          header: "Address",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "suppliers",
          header: "Company",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "date",
          header: "Delivery date",
          footer: (props) => props.column.id,
        },
        {
          accessorKey: "amount",
          header: "Amount",
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

  const data = useMemo(() => suppliers, [suppliers]);

  const [editModalData, setEditModalData] = useState<ISuppliers | null>(null);

  const openEditModal = (rowData: ISuppliers) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

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

  const getClassByStatus = (status: string) => {
    if (status === "Active") return css.greenStatus;
    return css.redStatus;
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

      {editModalData && (
        <Modal onClose={closeEditModal} title="Edit supplier">
          <EditModal onClose={closeEditModal} data={editModalData} />
        </Modal>
      )}
    </>
  );
};

export default AllSuppliersTable;
