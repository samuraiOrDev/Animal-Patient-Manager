
import { useState, useEffect, FC, FormEvent } from 'react'
import { PacienteInterface, PacientesContext } from "./PacientesContext"

interface Props { children: JSX.Element | JSX.Element[] }
const initialState = { name: '', namepropietario: '', email: '', phone: '', date: '', sintomas: '', uuid: '' }

const validateForm = (values: PacienteInterface) => {
    const errors: PacienteInterface = {
        name: '',
        namepropietario: '',
        sintomas: '',
        email: '',
        phone: '',
        date: '',
        uuid: ''
    };
    if (!values.name) {
        errors.name = 'El nombre es requerido'
    }
    if (!values.namepropietario) {
        errors.namepropietario = 'El nombre del propietario es requerido'
    }
    if (!values.email) {
        errors.email = 'El email es requerido'
    }
    if (!values.phone) {
        errors.phone = 'El teléfono es requerido'
    }
    if (!values.date) {
        errors.date = 'La fecha es requerida'
    }
    if (!values.sintomas) {
        errors.sintomas = 'Los síntomas son requeridos'
    }
    return errors;
}
export const PacientesProvider: FC<Props> = ({ children }) => {

    const [listadoPacientes, setListadoPacientes] = useState<PacienteInterface[]>([initialState])
    const [values, setValues] = useState<PacienteInterface>(initialState)
    const [errors, setErrors] = useState<PacienteInterface>(initialState);

    useEffect(() => {
        const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]')
        setListadoPacientes(pacientes)
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors = validateForm(values);
        setErrors(validationErrors);
        if (!Object.values(validationErrors).every(value => !value)) return;
        if (values.uuid) {
            const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]')
            const newListadoPacientes = pacientes.map((paciente: PacienteInterface) => {
                if (paciente.uuid === values.uuid) {
                    return values
                }
                return paciente
            })
            localStorage.setItem('pacientes', JSON.stringify(newListadoPacientes))
            setListadoPacientes(newListadoPacientes)
        } else {
            values.uuid = new Date().getTime().toString();
            if (localStorage.getItem('pacientes')) {
                const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]')

                localStorage.setItem('pacientes', JSON.stringify([...pacientes, values]))
                setListadoPacientes([...pacientes, values])
            } else {
                localStorage.setItem('pacientes', JSON.stringify([values]))
                setListadoPacientes([values])
            }
        }
        setValues(initialState)
    }
    const handleInputChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    const handleDelete = (uuid: string) => {
        const newListadoPaciente = listadoPacientes.filter(paciente => paciente.uuid !== uuid);
        if (newListadoPaciente.length === 0) {
            localStorage.removeItem('pacientes')
        } else {
            localStorage.setItem('pacientes', JSON.stringify(newListadoPaciente))
        }
        setListadoPacientes(newListadoPaciente);
    }
    const handleEdit = (uuid: string) => {
        const pacienteEdit = listadoPacientes.filter(paciente => paciente.uuid === uuid);
        setValues(pacienteEdit[0])
        setErrors(initialState)
    }
    return (
        <PacientesContext.Provider value={{
            listadoPacientes,
            setListadoPacientes,
            initialState,
            handleDelete,
            handleEdit,
            values,
            handleSubmit,
            handleInputChange,
            errors
        }}>
            {children}
        </PacientesContext.Provider>
    )
}
