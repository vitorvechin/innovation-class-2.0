import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="flex items-center justify-center gap-2 text-white text-3xl font-semibold mb-6">
            <FaGithub className="text-white text-6xl" />
            <span>
                Perfil <strong className="text-white">GitHub</strong>
            </span>
        </div>
    );
}

export default Header;
