function NewNote() {
  return (
    <form
      method="post"
      id="note-form"
      className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md"
    >
      <p>
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full bg-gray-200 focus:bg-white border border-gray-300 focus:border-purple-500 rounded-lg py-2 px-4 focus:outline-none"
        />
      </p>
      <p className="mt-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          required
          className="w-full bg-gray-200 focus:bg-white border border-gray-300 focus:border-purple-500 rounded-lg py-2 px-4 focus:outline-none"
        ></textarea>
      </p>
      <p className="mt-6">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-2 px-4 rounded-full
                hover:from-purple-700 hover:to-purple-500 transition duration-300 ease-in-out focus:outline-none"
        >
          Add note
        </button>
      </p>
    </form>
  );
}

export default NewNote;
