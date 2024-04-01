import { json, redirect } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import NewNote from "~/components/NewNote";
import NoteList from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  if (!notes || notes.length === 0) {
    throw json({ message: "No notes found" }, { status: 404 });
  }
  return notes;

  // other: This is the same as the following:
  // return new Response(JSON.stringify({ notes }), {
  //   headers: { "Content-Type": "application/json" },
  // });
}

export async function action({ request }: { request: any }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  const lengthError = "Title must be at least 5 characters";
  const lengthKey = "message";

  // validation
  if (noteData.title.trim().length < 5) {
    noteData[lengthKey] = lengthError;
    return noteData;
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);

  // redirect user to notes page
  return redirect("/notes");
  // const noteData = {
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // };
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <NewNote />
        <h1>Unfortunately we received a {error.status} status when requesting your notes, you can return to the homepage or create a new contact. </h1>
        <p>Status: </p>
        <p>{error.data.message}</p>
        <p>
          Back to <Link to={"/"}>home</Link>
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>
          Back to <Link to={"/"}>safe</Link>
        </p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
