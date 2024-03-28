import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
  return notes;

  // other: This is the same as the following:
  // return new Response(JSON.stringify({ notes }), {
  //   headers: { "Content-Type": "application/json" },
  // });
}

export async function action({ request }: { request: any }) {
  const formData = await request.formData();
  const nateData = Object.fromEntries(formData);
  // add validation
  const existingNotes = await getStoredNotes();
  nateData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(nateData);
  await storeNotes(updatedNotes);

  // redirect user to notes page
  return redirect("/notes");
  // const nateData = {
  //   title: formData.get("title"),
  //   content: formData.get("content"),
  // };
}

// export default const NotesPage = () => {
//   return (
//     <main>
//       <h1>My notes</h1>
//     </main>
//   )
// };
