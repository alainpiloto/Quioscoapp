import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState({});
  const [product, setProduct] = useState();
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [actualStep, setActualStep] = useState(1);
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');

  const router = useRouter();

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

  const handledEditQuantity = (id) => {
    const orderToEdit = order.filter((subOrder) => subOrder.id === id);

    setProduct(orderToEdit[0]);

    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    const orderUpdated = order.filter((subOrder) => subOrder.id !== id);
    setOrder(orderUpdated);
  };
  useEffect(() => {
    const initialValue = 0;
    const newTotal = order.reduce((total, product) => (product.precio * product.quantity) + total, initialValue);
    setTotal(newTotal);
  }, [order]);

  const putOrder = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/ordenes', {
        order, name, total, date: Date.now().toString(),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
    router.push('/');
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
      handledEditQuantity,
      handleDeleteProduct,
      setTotal,
      total,
      setName,
      name,
      putOrder,
    }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}

export { QuioscoProvider };
export default QuioscoContext;
