import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar({ onSearch }) {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) return;
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <div className="flex h-12 w-full items-center rounded-xl border border-gray-400 bg-white px-1">
                <input
                    type="text"
                    className="w-[90%] bg-inherit px-4 outline-none placeholder:text-black"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite um usuário do GitHub"
                />
                <button
                    type="submit"
                    className="bg-blue-600 rounded-xl w-[10%] h-[90%] flex items-center justify-center cursor-pointer">
                    <FaSearch className="text-white" />
                </button>
            </div>
        </form>
    );
}

export default Searchbar;
