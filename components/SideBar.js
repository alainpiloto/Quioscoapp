
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categorie from "./Categorie"

const SideBar = () => {

  const {categories} = useQuiosco()
  console.log({categories})
  return (
    <>
        <Image width={300} height={100} src="/assets/img/logo.svg" alt="Imagen logotipo" />

        <nav className="mt-10">
          {categories.map(categorie => (<Categorie key={categorie.id} categorie={categorie}/>) )}
        </nav>
    </>
  )
}

export default SideBar