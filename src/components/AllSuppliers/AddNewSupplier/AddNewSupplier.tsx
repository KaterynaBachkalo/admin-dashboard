import css from "./AddNewSupplier.module.css";
import { FC, useState } from "react";
import Modal from "../../Modal/Modal";
import AddNewSupplierModal from "../AddNewSupplierModal/AddNewSupplierModal";
import { ISuppliersToBD } from "../../../types";

interface IAddSupplier {
  onAddSupplier: (supplier: ISuppliersToBD) => void;
}

const AddNewSupplier: FC<IAddSupplier> = ({ onAddSupplier }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const closeAddModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button className={css.button} onClick={() => setOpenModal(true)}>
        Add a new suppliers
      </button>

      {isOpenModal && (
        <Modal onClose={closeAddModal} title="Add a new supplier">
          <AddNewSupplierModal
            onClose={closeAddModal}
            onAddSupplier={onAddSupplier}
          />
        </Modal>
      )}
    </>
  );
};

export default AddNewSupplier;
