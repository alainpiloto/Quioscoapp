import React from 'react';
import Image from 'next/image';
import { formatMoney } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';

function Product({ product }) {
  const { nombre, imagen, precio } = product;

  const { handleSetProduct, handleChangeModal } = useQuiosco();
  return (
    <div className="border p-3 flex flex-col rounded-sm">
      <Image className="rounded-sm" width={400} height={500} src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} />
      <div className="p-5 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold">{nombre}</h3>

        <div className="">
          <p className="mt-5 font-black text-4xl text-amber-500">{formatMoney(precio)}</p>
          <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 py-1 rounded-sm uppercase font-bold"
            type="button"
            onClick={() => {
              handleSetProduct(product);
              handleChangeModal();
            }}
          >
            Agregar
          </button>

        </div>

      </div>
    </div>
  );
}

export default Product;
