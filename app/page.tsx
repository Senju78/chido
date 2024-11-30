"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { NoteData } from "./types/Note";
import NoteList from "./components/note-list/NoteList";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
    const [notes, setNotes] = useState<NoteData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterId, setFilterId] = useState<number>(0);

    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true);
            let query = supabase
                .from("notes")
                .select("*")
                .order("created_at", { ascending: false });

            if (filterId !== 0) {
                query = query.eq("category", filterId);
            }

            const { data, error } = await query;

            if (error) {
                console.error("Error al obtener las notas:", error.message);
            } else {
                const processedNotes = (data || []).map((note) => ({
                    ...note,
                    created_at: new Date(note.created_at),
                }));
                setNotes(processedNotes);
            }

            setIsLoading(false);
        };

        fetchNotes();
    }, [filterId]);

    const handleAddNote = async () => {
        const newNote = {
            title: "",
            content: "",
            category: 1,
            created_at: new Date().toISOString(),
            status: 0,
        };

        const { data, error } = await supabase
            .from("notes")
            .insert(newNote)
            .select()
            .single();

        if (error) {
            console.error("Error al agregar la nota a Supabase:", error.message);
        } else if (data) {
            setNotes((currentNotes) => [
                { ...data, created_at: new Date(data.created_at) },
                ...currentNotes,
            ]);
        }
    };

    const updateNote = async (updatedNote: NoteData) => {
        const updatedNotes = notes.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
        );
        setNotes(updatedNotes);

        const { error } = await supabase
            .from("notes")
            .update({
                title: updatedNote.title,
                content: updatedNote.content,
                category: updatedNote.category,
                status: updatedNote.status || 0,
            })
            .eq("id", updatedNote.id);

        if (error) {
            console.error("Error al actualizar la nota:", error.message);
        }
    };

    const deleteNote = async (noteId: number) => {
        setNotes(notes.filter((note) => note.id !== noteId));
        const { error } = await supabase
            .from("notes")
            .delete()
            .eq("id", noteId);

        if (error) {
            console.error("Error al eliminar la nota:", error.message);
        }
    };

    return (
        <div className="flex flex-row h-screen bg-gradient-to-t from-indigo-200 via-pink-200 to-yellow-200">
            <div className="max-w-60 border-r shadow-md bg-gradient-to-b from-indigo-500 to-pink-500 text-white">
                <Sidebar onFilterChange={setFilterId} />
            </div>
            <div className="flex flex-col w-full bg-pastelCream text-pastelGray p-6">
                <div className="p-4 flex justify-between items-center">
                    <button
                        onClick={handleAddNote}
                        className="px-6 py-3 bg-pastelGreen text-white rounded-xl hover:bg-pastelBlue transition-all"
                    >
                        Agregar Nota
                    </button>
                </div>
                <div className="flex-1 p-4" onDoubleClick={handleAddNote}>
                    {isLoading ? (
                        <SkeletonLoader />
                    ) : notes.length === 0 ? (
                        <p className="text-xl font-semibold text-pastelBlue animate-pulse">
                            No hay notas con esta categoría...
                        </p>
                    ) : (
                        <NoteList
                            notes={notes}
                            onUpdateNote={updateNote}
                            onDeleteNote={deleteNote}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

const SkeletonLoader = () => (
    <div className="w-full h-screen flex p-4">
        <div className="space-y-2.5 animate-pulse w-full">
            <div className="flex items-center w-full space-x-4">
                <div className="shadow-sm rounded-md h-44 bg-pastelPink w-full"></div>
                <div className="shadow-sm rounded-md h-44 bg-pastelGreen w-full"></div>
                <div className="shadow-sm rounded-md h-44 bg-pastelBlue w-full"></div>
                <div className="shadow-sm rounded-md h-44 bg-pastelOrange w-full"></div>
            </div>
            <span className="sr-only">Cargando...</span>
        </div>
    </div>
);
