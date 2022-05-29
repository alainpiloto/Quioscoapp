import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import Product from '../components/Product';

export default function Home() {
  const { actualCategory } = useQuiosco();
  return (
    <Layout pagina={`Menu ${actualCategory?.nombre}`}>
      <h1 className="text-4xl font-black">{actualCategory?.nombre}</h1>
      <p className="text-2xl my-10 flex ">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {actualCategory?.productos?.map((product) => (

          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
