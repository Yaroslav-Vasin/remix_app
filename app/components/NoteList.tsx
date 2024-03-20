function NoteList({ notes }) {
  console.log("Loading notes");

  return (
    <ul
      id="note-list"
      className="p-4 flex justify-center gap-8 text-white flex-wrap"
    >
      {notes.map((note, index) => (
        <li
          key={note.id}
          className="bg-gradient-to-r from-purple-600 to-purple-400 p-4 rounded-xl shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition duration-300 ease-in-out hover:from-purple-700 hover:to-purple-500"
        >
          <article>
            <header>
              <ul className="flex gap-2 border-b-2">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </li>
              </ul>
              <h2 className="text-3xl">{note.title}</h2>
            </header>
            <p className="text-s">{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
