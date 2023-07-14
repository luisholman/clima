import { useState, createContext } from "react";
import axios from "axios";

export const climaContext = createContext()

export const ClimaProvider =({children})=>{

   // console.log(import.meta.env.VITE_API_KEY)

    const [busqueda, setBusqueda]=useState({
        ciudad: '',
        pais: ''
    });
    
    const [resultado, setResultado] = useState({})

    const [cargando, setCargando] = useState(false)//loading

    const [noResultado, setNoResultado]=useState(false)

    const datosBusqueda = e=>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

    const consultarClima= async datos=>{
        setCargando (true) //loading
        setNoResultado(false)
        try {
            const {ciudad, pais}= datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const { data } =await axios (url)
            console.log(data[0])
            const {lat, lon } = data[0]
            
            const urlClima=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: clima } = await axios (urlClima)
            setResultado(clima)
            
        } catch (error) {
            setNoResultado('No hay resultados')
        }finally{
            setCargando(false)//loading
        }

        
    }

    return(
        <climaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado
            }}
        >
            {children}
        </climaContext.Provider>
    )
}