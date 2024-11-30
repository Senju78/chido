import { NoteData } from "../../types/Note";
import NoteCard from "../note-card/NoteCard";

interface NoteListProps {
    notes: NoteData[];
    onUpdateNote: (updatedNote: NoteData) => Promise<void>;
    onDeleteNote: (noteId: number) => void;
}

const NoteList = ({ notes, onUpdateNote, onDeleteNote }: NoteListProps) => {
    return (
        <div className="flex flex-wrap p-6 gap-8 bg-gradient-to-br from-lightPurple to-darkPurple text-white max-h-screen overflow-auto rounded-2xl shadow-glow transition-all duration-300">
            {notes.length === 0 ? (
                <p className="text-xl font-semibold text-vividPink animate-pulse">
                    ¡No hay notas aún! Comienza creando una nueva 🎉
                </p>
            ) : (
                notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onUpdateNote={onUpdateNote}
                        onDeleteNote={onDeleteNote}
                    />
                ))
            )}
        </div>
    );
};

export default NoteList;
