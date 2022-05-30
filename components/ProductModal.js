import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatMoney } from '../helpers';

function ProductModal() {
  const {
    product, handleChangeModal, handleAddOrder, order,
  } = useQuiosco();
  const [quantity, setQuantity] = useState(1);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (order.some((productInOrder) => productInOrder.id === product.id)) {
      setEditMode(true);
      const quantityInOrder = order.find((productInOrder) => productInOrder.id === product.id);
      setQuantity(quantityInOrder.quantity);
    }
  }, [order]);

  console.log({ quantity });
  const disableMinus = quantity === 1;

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image width={300} height={400} src={`/assets/img/${product.imagen}.jpg`} alt={`imagen producto ${product.imagen}`} />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end ">
          <button type="button" onClick={() => handleChangeModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.nombre}</h1>
        <p className="mt-05 font-black text-5xl text-amber-500">{formatMoney(product.precio)}</p>
        <div className="flex gap-4 mt-mt-5">
          <button className="disabled:cursor-not-allowed" type="button" disabled={disableMinus} onClick={() => setQuantity(quantity - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <p>{quantity}</p>
          <button type="button" onClick={() => setQuantity(quantity + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <button type="button" onClick={() => handleAddOrder({ ...product, quantity })} className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">
          {editMode ? 'Guardar cambios' : 'Agregar'}
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
