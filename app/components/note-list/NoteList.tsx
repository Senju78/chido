import { NoteData } from "../../types/Note";
import NoteCard from "../note-card/NoteCard";

interface NoteListProps {
    notes: NoteData[];
    onUpdateNote: (updatedNote: NoteData) => Promise<void>;
    onDeleteNote: (noteId: number) => void;
}

const NoteList = ({ notes, onUpdateNote, onDeleteNote }: NoteListProps) => {
    return (
        <div className="flex flex-wrap p-6 gap-6 bg-pastelCream text-pastelPurple max-h-screen overflow-auto rounded-lg shadow-md transition-all ease-in-out duration-300">
            {notes.length === 0 ? (
                <p className="text-xl font-semibold text-pastelBlue animate-pulse">
                    No hay notas disponibles...
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
