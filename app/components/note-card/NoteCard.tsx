"use client";
import { useState, useRef, useEffect } from "react";
import { NoteData } from "../../types/Note";

interface NoteCardProps {
    note: NoteData;
    onUpdateNote: (updatedNote: NoteData) => void;
    onDeleteNote: (noteId: number) => void;
}

const NoteCard = ({ note, onUpdateNote, onDeleteNote }: NoteCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editContent, setEditContent] = useState(note.content);
    const [editCategory, setEditCategory] = useState(note.category);

    const cardRef = useRef<HTMLDivElement | null>(null);

    const toggleExpand = () => setIsExpanded(!isExpanded);
    const handleEditClick = () => setIsEditing(!isEditing);

    const handleSaveClick = () => {
        setIsEditing(false);
        onUpdateNote({
            ...note,
            title: editTitle,
            content: editContent,
            category: editCategory,
        });
    };

    useEffect(() => {
        if (isExpanded && cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [isExpanded]);

    return (
        <div
            ref={cardRef}
            className={`relative p-6 rounded-xl shadow-glow transition-transform transform ${
                isExpanded ? "scale-105" : "scale-100"
            } bg-lightPurple hover:shadow-2xl hover:scale-105 mb-6`}
        >
            <div className="flex justify-between items-center mb-4">
                {isEditing ? (
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkPurple"
                        placeholder="Título de la nota"
                    />
                ) : (
                    <h2
                        onClick={toggleExpand}
                        className="text-lg font-bold truncate text-darkPurple cursor-pointer hover:underline"
                    >
                        {note.title}
                    </h2>
                )}
                <div
                    className={`w-4 h-4 rounded-full ${
                        note.category === 1
                            ? "bg-vividPink"
                            : note.category === 2
                            ? "bg-pastelBlue"
                            : "bg-pastelGreen"
                    }`}
                ></div>
            </div>

            <div className="text-sm text-gray-700 mb-4">
                {isEditing ? (
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkPurple resize-none"
                        rows={4}
                        placeholder="Escribe tu nota aquí..."
                    />
                ) : (
                    <p
                        onClick={toggleExpand}
                        className={`cursor-pointer ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}
                    >
                        {note.content}
                    </p>
                )}
            </div>

            {isEditing && (
                <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(Number(e.target.value))}
                    className="w-full mb-4 p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkPurple"
                >
                    <option value={1}>Ideas</option>
                    <option value={2}>Por hacer</option>
                    <option value={3}>Terminado</option>
                </select>
            )}

            <div className="flex justify-between">
                <button
                    onClick={() => onDeleteNote(note.id)}
                    className="text-white bg-vividPink px-4 py-2 rounded-lg shadow-md hover:bg-darkPurple transition-all"
                >
                    Eliminar
                </button>
                {isEditing ? (
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="text-darkPurple border border-darkPurple px-4 py-2 rounded-lg hover:bg-darkPurple hover:text-white transition-all"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSaveClick}
                            className="text-white bg-darkPurple px-4 py-2 rounded-lg shadow-md hover:bg-vividPink transition-all"
                        >
                            Guardar
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="text-white bg-darkPurple px-4 py-2 rounded-lg shadow-md hover:bg-vividPink transition-all"
                    >
                        Editar
                    </button>
                )}
            </div>

            {isExpanded && !isEditing && (
                <div className="absolute top-2 right-2 text-xs text-gray-500">
                    Última modificación: {new Date(note.created_at).toLocaleDateString()}
                </div>
            )}
        </div>
    );
};

export default NoteCard;
