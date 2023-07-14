
import {useContext} from 'react'
import {climaContext} from '../context/ClimaProvider'

export const useClima = () => {
  return useContext(climaContext)
}
