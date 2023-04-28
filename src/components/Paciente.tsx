import { FC, useContext } from 'react'
import { PacientesContext } from '../context';

interface Props {
    name: string,
    namepropietario: string,
    sintomas: string,
    date?: string,
    uuid: string,

}
export const Paciente: FC<Props> = ({
    name,
    namepropietario,
    sintomas,
    date,
    uuid
}) => {
    const { handleDelete, handleEdit } = useContext(PacientesContext);
    return (
        <div className='m-3 bg-gray-700 shadow-md rounded-lg py-10 px-10'>
            <div>
                <p className='font-bold mb-3 text-gray-400 uppercase'>Nombre: {""}
                    <span className='font-normal normal-case'>{name}</span>
                </p>
                <p className='font-bold mb-3 text-gray-400 uppercase'>Propieatario: {""}
                    <span className='font-normal normal-case'>{namepropietario}</span>
                </p>
                <p className='font-bold mb-3 text-gray-400 uppercase'>Feacha alta: {""}
                    <span className='font-normal normal-case'>{date}</span>
                </p>
                <p className='font-bold mb-3 text-gray-400 uppercase'>Síntomas: {""}
                    <span className='font-normal normal-case'>
                        {sintomas}
                    </span>
                </p>
                <div className='flex gap-2 md:w-1/2'>
                    <button className='bg-red-500 h(over:bg-red-600 w-full p-2 text-white uppercase font-bold rounded-lg' onClick={() => handleDelete(uuid)}>
                        Eliminar
                    </button>
                    <button className='bg-yellow-500 hover:bg-yellow-600 w-full p-2 text-white uppercase font-bold rounded-lg' onClick={() => handleEdit(uuid)}>
                        Editar
                    </button>
                </div>
            </div>
        </div>
    )
}
