import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState({});
  const [product, setProduct] = useState();
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const getCategories = async () => {
    const { data } = await axios('/api/categorias');

    setCategories(data);
  };

  const getProductos = async () => {
    const { data } = await axios('/api/productos');
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = ({ categoriaId, imagen, ...product }) => {
    const productExists = order.some((productInOrder) => productInOrder.id === product.id);

    if (productExists) {
      const updatedOrder = order.map((productInOrder) => (productInOrder.id === product.id ? product : productInOrder));
      setOrder(updatedOrder);
    } else {
      setOrder([...order, product]);
    }
    handleChangeModal()
  };

  useEffect(() => {
    getCategories();
    getProductos();
  }, []);

  useEffect(() => {
    setActualCategory(categories[0]);
  }, [categories]);

  function handleClickCategory(id) {
    const actualCategoryFiltered = categories.filter((catetgory) => id === catetgory.id);
    setActualCategory(actualCategoryFiltered[0]);
  }
  return (
    <QuioscoContext.Provider value={{
      categories,
      handleClickCategory,
      actualCategory,
      handleSetProduct,
      product,
      modal,
      handleChangeModal,
      handleAddOrder,
      order,
    }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}

export { QuioscoProvider };
export default QuioscoContext;
