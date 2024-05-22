import { FC } from "react";
import css from "./EditModal.module.css";
import { Products } from "../AllProducts/AllProductsTable/AllProductsTable";

interface EditModalProps {
  data: Products;
  onClose: () => void;
}

const EditModal: FC<EditModalProps> = ({ data, onClose }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>Edit Product</h2>
        <p>Info: {data.info}</p>
        <p>Category: {data.category}</p>
        <p>Stock: {data.stock}</p>
        <p>Suppliers: {data.suppliers}</p>
        <p>Price: {data.price}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditModal;
