import { useClima } from "../hooks/useClima"
export const Resultado = () => {

  const { resultado } = useClima()
  const { name, main } = resultado

  //grados kelvin
  const Kelvin = 273.15;

  return (
    <div className="contenedor clima">

      <h2>el clima de {name} es : </h2>
      <p>
        {parseInt(main.temp - Kelvin)} <span>&#x2103;</span>
      </p>

      <div className="temp_min_max">
        <p>
          Minima : {parseInt(main.temp_min - Kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Maxima : {parseInt(main.temp_max - Kelvin)} <span>&#x2103;</span>
        </p>
      </div>

    </div>
  )
}
