"use client";

interface SidebarProps {
    onFilterChange: (filterId: number) => void;
}

const Sidebar = ({ onFilterChange }: SidebarProps) => {
    const categories = [
        { id: 0, label: "Mostrar todo", color: "bg-gray-500", icon: "📄" },
        { id: 1, label: "Ideas", color: "bg-green-300", icon: "💡" },
        { id: 2, label: "Por hacer", color: "bg-yellow-300", icon: "📝" },
        { id: 3, label: "Terminado", color: "bg-blue-300", icon: "✔️" },
    ];

    const handleFilterClick = (filterId: number) => {
        onFilterChange(filterId);
    };

    return (
        <div className="flex flex-col space-y-4 p-4 bg-gradient-to-r from-purple-500 to-red-500 text-white w-72 rounded-xl shadow-md">
            <div className="flex items-center space-x-3">
                <svg
                    className="w-10 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504-1.125-1.125-1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                    />
                </svg>
                <p className="text-3xl font-bold">Notas</p>
            </div>

            <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleFilterClick(category.id)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-md text-lg hover:bg-purple-400 hover:text-white transition-all"
                    >
                        <span className={`${category.color} rounded-full p-1`}>
                            {category.icon}
                        </span>
                        <span>{category.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
