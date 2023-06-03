import { useEffect } from 'react';
import useQuiosco from '../hooks/useQuiosco';
import Layout from '../layout/Layout';
import { formatMoney } from '../helpers';

export default function Total() {
  const {
    order, putOrder, total, name, setName,
  } = useQuiosco();

  const testOrder = () => order.length === 0 || name === '';

  useEffect(() => {
    testOrder();
  }, [order]);

  return (
    <Layout pagina="Total">
      <h1 className="text-4xl font-black">Total y Confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={(e) => putOrder(e)}>
        <div>
          <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl ">
            Nombre
            <input id="nombre" type="text" onChange={(e) => setName(e.target.value)} className="bg-gray-200 ml-2 w-full lg:w-1/3 mt-3 p-2 rounded-md" />
          </label>
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar:
            {' '}
            <span className="font-bold">{ formatMoney(total)}</span>
          </p>
          <div className="mt-5">
            <input type="submit" disabled={testOrder()} value="Confirmar pedido" className=" disabled:bg-indigo-100 disabled:cursor-not-allowed hover:bg-indigo-800 hover:cursor-pointer bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center " />
          </div>
        </div>
      </form>
    </Layout>
  );
}
