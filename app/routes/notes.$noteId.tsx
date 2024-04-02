import { Link, json, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";

interface Note {
  id?: string;
  content?: string;
  title?: string;
}

export default function NoteDetailsPage() {
  const note: { id?: string; content?: string; title?: string } =
    useLoaderData();

  return (
    <main className="text-center rounded-2xl" id="note-details">
      <header>
        <nav>
          <Link className="text-3xl text-sky-400" to="/notes">
            Back to all notes
          </Link>
        </nav>
        <h1 className="text-3xl text-black-900 font-extrabold mt-4">
          {note.title}
        </h1>
      </header>
      <p className="mt-2" id="note-details-content">
        {note.content}
      </p>
    </main>
  );
}

export async function loader({ params }: { params: { noteId: string } }) {
  const notes = await getStoredNotes();
  const noteId = params.noteId; // noteId должно быть в названии файла
  const selectedNote = notes.find((note: Note) => note.id === noteId);

  if (!selectedNote) {
    return json({ message: "Note not found" + noteId }, { status: 404 });
  }

  return selectedNote;
}

export function meta({ data }): { title: string; description: string }[] {
  return [
    {
      title: data.title,
      description: "A list of notes",
    },
  ];
}
