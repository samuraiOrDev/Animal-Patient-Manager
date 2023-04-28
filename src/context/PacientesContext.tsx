import { FormEvent, createContext } from "react";
export interface PacienteInterface {
    uuid: string
    name: string,
    namepropietario: string,
    sintomas: string,
    date?: string,
    email: string,
    phone: string,
    [key: string]: string | undefined
}

interface PacientesContextProps {
    listadoPacientes: PacienteInterface[];
    setListadoPacientes: React.Dispatch<React.SetStateAction<PacienteInterface[]>>;
    initialState: PacienteInterface;
    handleDelete: (uuid: string) => void;
    handleEdit: (uuid: string) => void;
    values: PacienteInterface;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleInputChange: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errors: PacienteInterface;
}
export const PacientesContext = createContext({} as PacientesContextProps);
