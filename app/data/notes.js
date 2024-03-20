import fs from "fs/promises";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

// import fs from "fs/promises";

// export async function getStoredNotes() {
//   const rowFileContent = await fs.readFile("notes.json", {
//     encoding: "utf-8",
//   }); // Fetch the notes from the server

//   const data = JSON.parse(rowFileContent);
//   const storedNotes = data.nites ?? [];
//   return storedNotes;
// }

// export function storedNotes(notes) {
//   fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
// }
