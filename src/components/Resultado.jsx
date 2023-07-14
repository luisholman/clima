import { useClima } from "../hooks/useClima"
export const Resultado = () => {

    const {resultado}= useClima()
    const { name } = resultado

  return (
    <div className="contenedor">

        <h2>el clima de {name} es : </h2>
    </div>
  )
}
