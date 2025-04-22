import { FaRegSadTear } from "react-icons/fa";

export default function UserCard() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mt-8 text-center text-red-700 flex flex-col items-center justify-center gap-5">
            <FaRegSadTear className="text-3xl"></FaRegSadTear>
            <h1>Nenhum perfil foi encontrado com ese nome de usuário.</h1>
        </div>
    );
}
