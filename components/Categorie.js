import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
const Categorie = ({categorie}) => {
    const {nombre, icono, id} = categorie
    const { handleClickCategorie, actualCategorie } = useQuiosco()
    console.log({id})
  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">
        <Image 
             width={70}
             height={70}
             src={`/assets/img/icono_${icono}.svg`}
             alt={"Imagen Icono"}
             className={"mr-5"}
        />
        <button type="button" className=" text-2xl font-bold hover:cursor-pointer" onClick={() => handleClickCategorie(id)} >

        </button>
    </div>
  )
}

export default Categorie