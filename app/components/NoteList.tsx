import { Link, Outlet } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";

interface Note {
  id: string;
  content: string;
  title: string;
}

function NoteList({ notes }: { notes: Note[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <>
      <ul
        id="note-list"
        className="p-4 flex justify-center gap-8 text-white flex-wrap"
      >
        {notes.map((note: Note, index: number) => (
          <li
            key={note.id}
            className="bg-gradient-to-r from-purple-600 to-purple-400 p-4 rounded-xl shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition duration-300 ease-in-out hover:from-purple-700 hover:to-purple-500"
          >
            <Link to={note.id} onClick={openModal}>
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
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && (
        // eslint-disable-next-line
        <div
          onClick={closeModal}
          className="absolute bg-purple-600/50 w-full h-full top-0 left-0 flex justify-center items-center"
        >
          <div
            className="w-1/2 h-1/2 bg-white rounded-xl p-20 flex justify-center border-8 border-purple-700
           border-solid"
          >
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default NoteList;
