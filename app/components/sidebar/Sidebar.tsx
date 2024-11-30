"use client";

interface SidebarProps {
    onFilterChange: (filterId: number) => void;
}

const Sidebar = ({ onFilterChange }: SidebarProps) => {
    const categories = [
        { id: 0, label: "Todo", color: "bg-gray-200", icon: "📂" },
        { id: 1, label: "Conceptos", color: "bg-teal-100", icon: "🌱" },
        { id: 2, label: "Tareas", color: "bg-orange-100", icon: "✅" },
        { id: 3, label: "Completadas", color: "bg-indigo-100", icon: "🏁" },
    ];

    const handleFilterClick = (filterId: number) => {
        onFilterChange(filterId);
    };

    return (
        <aside className="w-64 h-screen bg-white shadow-lg rounded-lg p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
                    Categorías
                </h1>
                <p className="text-sm text-gray-500">
                    Selecciona una categoría para filtrar las notas
                </p>
            </div>
            <div className="space-y-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleFilterClick(category.id)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow ${category.color}`}
                    >
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm font-medium text-gray-700">
                            {category.label}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
