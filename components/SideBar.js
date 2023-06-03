import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import Categorie from './Categorie';

function SideBar() {
  const { categories } = useQuiosco();
  return (
    <div className="flex flex-col h-screen">
      <div className="h-fit bg-white py-6">

        <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen logotipo" />
      </div>

      <nav className=" flex-1 overflow-y-auto">
        {categories.map((categorie) => (<Categorie key={categorie.id} categorie={categorie} />))}
      </nav>
    </div>
  );
}

export default SideBar;
