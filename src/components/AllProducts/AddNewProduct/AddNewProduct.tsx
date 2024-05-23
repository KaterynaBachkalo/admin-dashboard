import css from "./AddNewProduct.module.css";
import Icon from "../../Icon";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import AddNewProductModal from "../AddNewProductModal/AddNewProductModal";

const AddNewProduct = () => {
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
        <Modal onClose={closeAddModal} title="Add a new product">
          <AddNewProductModal onClose={closeAddModal} />
        </Modal>
      )}
    </>
  );
};

export default AddNewProduct;
