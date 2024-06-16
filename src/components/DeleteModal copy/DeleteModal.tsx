import { FC } from "react";
import css from "./DeleteModal.module.css";
import { Products } from "../AllProducts/AllProductsTable/AllProductsTable";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/admin/operation";
import { string } from "yup";

interface DeleteModalProps {
  data: Products;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ data, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
    onClose();
  };

  const handleDeleteClick = () => {
    if (data.id) {
      handleDelete(data.id);
    } else {
      console.error("Product id is undefined or null.");
    }
  };

  return (
    <>
      <p className={css.text}>Are you sure you want to delete {data.name}?</p>
      <div className={css.buttonWrap}>
        <button
          type="submit"
          className={css.buttonDelete}
          onClick={handleDeleteClick}
        >
          Delete
        </button>

        <button type="button" className={css.buttonCancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default DeleteModal;
