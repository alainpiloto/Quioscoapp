import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState({});
  const [product, setProduct] = useState();
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [actualStep, setActualStep] = useState(1);

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

  const handleAddOrder = ({ categoriaId, ...product }) => {
    const productExists = order.some((productInOrder) => productInOrder.id === product.id);

    if (productExists) {
      const updatedOrder = order.map((productInOrder) => (productInOrder.id === product.id ? product : productInOrder));
      setOrder(updatedOrder);
      toast.success('Guardado correctamente');
    } else {
      setOrder([...order, product]);
      toast.success('Agredado al pedido');
    }
    handleChangeModal();
  };

  const handleStepChange = (step) => {
    setActualStep(step);
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
      actualStep,
      handleStepChange,
    }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}

export { QuioscoProvider };
export default QuioscoContext;
