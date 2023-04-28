import { ChangeEvent, FC } from 'react'

interface Props {
    name: string;
    placeholder?: string;
    type: string;
    onchange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string | undefined;
    error: string | undefined;
}
export const InputFormulario: FC<Props> = ({
    name,
    placeholder,
    type,
    value,
    onchange,
    error
}) => {
    return (
        <div className='mb-5'>
            {

                type != 'textarea' ? (
                    <>
                        <input
                            type={type}
                            name={name}
                            id={name}
                            placeholder={placeholder}
                            value={value}
                            onChange={onchange}
                            className='border-2 p-2 w-full mt-2 placeholder-yellow-600 bg-transparent border-yellow-600 rounded-md  text-yellow-600'
                        />
                        {
                            error && (<p className='text-red-500 italic mt-1'>{error}</p>)
                        }
                    </>
                ) : (
                    <>
                        <textarea name={name} id={name} onChange={onchange} value={value} className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md border-yellow-600 bg-transparent text-yellow-600' />
                        {
                            error && (<p className='text-red-500 italic mt-1'>{error}</p>)
                        }
                    </>
                )
            }
        </div>
    )
}
