import {useState, useEffect, createContext } from "react"
import axios from "axios"

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [actualCategorie, setActualCategorie] = useState({})


    const getCategories = async () => {
        const {data} = await axios("/api/categorias")

        setCategories(data)
    }
    
    useEffect(() => {
        getCategories()
    }, [])

    const handleClickCategorie = id => {
        console.log(id)
    }
    return(
        <QuioscoContext.Provider value={{categories, handleClickCategorie , actualCategorie}}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {QuioscoProvider}
export default QuioscoContext