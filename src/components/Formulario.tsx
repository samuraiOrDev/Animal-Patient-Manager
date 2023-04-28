import { FC, useContext } from 'react'
import { InputFormulario } from '.'
import { PacientesContext } from '../context';



const fieldsForm = [
    {
        name: 'name',
        placeholder: 'Nombre del Paciente',
        type: 'text'
    },
    {
        name: 'namepropietario',
        placeholder: 'Nombre del Propietario',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'Email del Propietario',
        type: 'email'
    },
    {
        name: 'phone',
        placeholder: 'Teléfono del Propietario',
        type: 'tel'
    },
    {
        name: 'date',
        placeholder: 'Fecha de Ingreso',
        type: 'date'
    },
    {
        name: 'sintomas',
        type: 'textarea'
    }


]
export const Formulario: FC = () => {
    const { values, handleSubmit, handleInputChange, errors } = useContext(PacientesContext);
    return (
        <div className="md:w-1/2 lg:w-2/5" >
            <h2 className='font-black text-3xl text-center text-gray-400'>Seguimiento Pacientes</h2 >
            <p className='text-lg mt-5 text-center mb-10 text-gray-400'>
                Añadir Pacientes y {''}
                <span className='text-yellow-600 font-bold text-lg'>Administralos</span>
            </p>

            <form className='m-3 bg-gray-700 shadow-md rounded-lg py-10 px-10' onSubmit={handleSubmit}>
                <div>
                    {
                        fieldsForm.map((field, index) => (
                            <InputFormulario
                                key={index}
                                {...field}
                                onchange={handleInputChange}
                                value={values[`${field.name}`]}
                                error={errors[`${field.name}`]}
                            />
                        ))
                    }
                </div>
                <button type='submit' className='bg-yellow-600 w-full p-3 text-white uppercase font-bold'>
                    {values.uuid ? 'Editar Paciente' : 'Registrar Paciente'}
                </button>
            </form>
        </div>
    )
}
