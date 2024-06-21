import { FC } from "react";
import css from "./DeleteModal.module.css";
import { IProducts } from "../../types";

interface DeleteModalProps {
  data: IProducts;
  onClose: () => void;
  handleDelete: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ data, onClose, handleDelete }) => {
  return (
    <>
      <p className={css.text}>Are you sure you want to delete {data.name}?</p>
      <div className={css.buttonWrap}>
        <button
          type="submit"
          className={css.buttonDelete}
          onClick={handleDelete}
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
