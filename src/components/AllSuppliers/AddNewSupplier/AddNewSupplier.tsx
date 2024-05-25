import css from "./AddNewSupplier.module.css";
import Icon from "../../Icon";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import AddNewSupplierModal from "../AddNewSupplierModal/AddNewSupplierModal";

const AddNewSupplier = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const openAddNewProduct = () => {
    setOpenModal(true);
  };

  const closeAddModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={css.icon} onClick={openAddNewProduct}>
        <Icon name="add" width={20} height={20} />
      </div>

      {isOpenModal && (
        <Modal onClose={closeAddModal} title="Add a new supplier">
          <AddNewSupplierModal onClose={closeAddModal} />
        </Modal>
      )}
    </>
  );
};

export default AddNewSupplier;
