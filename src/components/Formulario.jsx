import {useState} from "react";  /* todos los useState son const [dato, setDato] */ 
import {useClima} from "../hooks/useClima"

export const Formulario = () => {

    const [alerta, setAlerta]=useState('');

    const {busqueda, datosBusqueda, consultarClima} = useClima();

    const {ciudad, pais}=busqueda//se llama destructuracion

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
           setAlerta('todos los campos son obligatorios');
           return
        }
        setAlerta('')
        consultarClima(busqueda)
    }

  return (

    <div className="contenedor">
        
        {alerta && <p>{alerta}</p>}

        <form action=""
        onSubmit={handleSubmit} //para enviar los datos
        >
            <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <input 
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
            />
            </div>

            <div className="campo">
            <label htmlFor="pais">Pais</label>
            <select 
            name="pais" 
            id="pais"
            onChange={datosBusqueda}
            value={pais}
            
            >
                <option value=""> -- seleccione -- </option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Peru</option>
            </select>
            </div>

            <input 
            type="submit" 
            value='Consultar Clima'
            />

            
        </form>
        
    </div>
  )
}
