import css from "./AddNewProduct.module.css";
import Icon from "../../Icon";
import { FC, useState } from "react";
import Modal from "../../Modal/Modal";
import AddNewProductModal from "../AddNewProductModal/AddNewProductModal";
import { IProductsToBD } from "../../../types";

interface IAddProduct {
  onAddProduct: (product: IProductsToBD) => void;
}

const AddNewProduct: FC<IAddProduct> = ({ onAddProduct }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const closeAddModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={css.icon} onClick={() => setOpenModal(true)}>
        <Icon name="add" width={20} height={20} />
      </div>

      {isOpenModal && (
        <Modal onClose={closeAddModal} title="Add a new product">
          <AddNewProductModal
            onClose={closeAddModal}
            onAddProduct={onAddProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default AddNewProduct;
