import React from 'react';
import Image from 'next/image';
import { formatMoney } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

function ProductResume({ product }) {
  const { handledEditQuantity, handleDeleteProduct } = useQuiosco();
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="w-1/6">
        <Image
          src={`/assets/img/${product.imagen}.jpg`}
          width={300}
          height={400}
          alt={`Imagen producto ${product.nombre}`}
        />

      </div>
      <div className="w-4/6">
        <p className="text-3xl font-bold">{product.nombre}</p>
        <p className="text-xl font-bold">
          Cantidad :
          {' '}
          {product.quantity}
        </p>
        <p className="text-xl font-bold text-amber-500 font-bold">
          Precio:
          {' '}
          { formatMoney(product.precio)}
        </p>
        <p className="text-sm mt-2 text-gray-700">
          Subtotal:
          {' '}
          { formatMoney(product.precio * product.quantity)}
        </p>
      </div>
      <div>
        <button onClick={() => handledEditQuantity(product.id)} type="button" className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>

          Editar
        </button>
        <button onClick={() => handleDeleteProduct(product.id)} type="button" className="bg-red-700 flex gap-2 px-5 py-2 mt-5 text-white rounded-md font-bold uppercase shadow-md w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>

          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductResume;
