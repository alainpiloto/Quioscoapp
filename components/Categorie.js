import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

function Categorie({ categorie }) {
  const { nombre, icono, id } = categorie;
  const { handleClickCategory, actualCategory } = useQuiosco();
  const isInActualCategery = actualCategory?.id === id;

  return (
    <button type="button" onClick={() => handleClickCategory(id)} className={`${isInActualCategery && 'bg-amber-400'} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        className="mr-5"
      />
      <p className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </p>
    </button>
  );
}

export default Categorie;
