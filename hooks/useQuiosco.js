import {useContext, useState, useEffect} from "react"
import QuioscoContext from "../context/QuioscoProvider"

const useQuiosco = () => {
 
    return useContext(QuioscoContext)

}

export default useQuiosco