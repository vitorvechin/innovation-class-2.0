export default function UserCard({ avatar, name, bio, repos, followers, following }) {
    return (
        <div className="bg-white text-black rounded-xl shadow-md p-6 w-full max-w-md mt-8 text-center">
            <img
                src={avatar}
                alt={`Avatar de ${name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            {bio && <p className="text-gray-700 mt-2">{bio}</p>}
            <div className="flex justify-around mt-4 text-sm text-gray-700">
                <div>
                    <span className="block font-semibold">{repos}</span>
                    <span>Repositórios</span>
                </div>
                <div>
                    <span className="block font-semibold">{followers}</span>
                    <span>Seguidores</span>
                </div>
                <div>
                    <span className="block font-semibold">{following}</span>
                    <span>Seguindo</span>
                </div>
            </div>
        </div>
    );
}
