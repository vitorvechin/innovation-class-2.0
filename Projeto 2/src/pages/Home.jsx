import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import UserCard from "../components/UserCard";
import ErrorUserNotFound from "../components/ErrorUserNotFound";
import { useState } from "react";

function Home() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false); 

    const handleSubmit = async (username) => {
        if (!username) return;

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error("Usuário não encontrado");
            }

            const data = await response.json();
            setUserData(data);
            setError(false); 
        } catch (error) {
            console.error("Erro ao buscar usuário:", error.message);
            setUserData(null);
            setError(true); 
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
            <Header />
            <Searchbar onSearch={handleSubmit} />
            {userData && (
                <UserCard
                    avatar={userData.avatar_url}
                    name={userData.name || userData.login}
                    bio={userData.bio}
                    repos={userData.public_repos}
                    followers={userData.followers}
                    following={userData.following}
                />
            )}
            {error && <ErrorUserNotFound />}
        </div>
    );
}

export default Home;
