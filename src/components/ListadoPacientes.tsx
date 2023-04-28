import { FC, useContext } from 'react'
import { PacienteInterface, PacientesContext } from '../context';
import { Paciente } from '.';
export const ListadoPacientes: FC = () => {
    const { listadoPacientes } = useContext(PacientesContext);

    return (
        <div className="md:w-1/2 lg:lg:w-3/5 md:h-screen overflow-y-scroll mt-10 md:mt-1" >
            <h2 className='font-black text-3xl text-center text-gray-400'>
                Listado de Pacientes
            </h2>
            <p className='tex-xl mt-5 mb-10 text-center text-gray-400'>
                Administra tus {""}
                <span className='text-yellow-600 font-bold'> Pacientes y Citas</span>
            </p>
            {
                listadoPacientes.length > 0 ? (
                    listadoPacientes?.map((paciente: PacienteInterface) => (
                        <Paciente {...paciente} key={paciente.uuid} />
                    ))
                ) : (
                    <p className='text-center text-gray-400 text-3xl font-bold'>No hay pacientes</p>
                )
            }
        </div>
    )
}
