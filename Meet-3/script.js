let notes = [];
const notesElement = document.getElementById("notes-list");

const renderNotes = () => {
  notesElement.innerHTML = "";
  notes.forEach((note, index) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.desc}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    notesElement.appendChild(noteElement);
  });
};

const addNote = () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;

  if (title.length > 1 && desc.length > 1) {
    notes.push({
      title,
      desc,
    });
  }

  const clearInput = () => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  };

  console.log(notes);
  clearInput();
  renderNotes();
};

const deleteNote = (index) => {
  notes.splice(index, 1);
  renderNotes();
};

renderNotes();
