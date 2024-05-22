import { FC } from "react";
import css from "./DeleteModal.module.css";
import { Products } from "../AllProducts/AllProductsTable/AllProductsTable";

interface DeleteModalProps {
  data: Products;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ data, onClose }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <p>Are you sure you want to delete {data.info}?</p>
        <button onClick={onClose}>Cancel</button>
        <button
          onClick={() => {
            // handle delete action here
            onClose();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
