import { FC } from "react"

export const Header: FC = () => {
    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto text-gray-400">
            Animal Patient {""}
            <span className="text-yellow-500">Manager</span>
        </h1>
    )
}
