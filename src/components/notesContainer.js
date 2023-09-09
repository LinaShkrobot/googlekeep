import { observer } from '../observer';

export class NotesContainer {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    observer.on('noteCreated', this.updateNotesContainer);
    this.updateNotesContainer();
  }

  updateNotesContainer = () => {
    this.api.getNotes().then((note) => {
      this.renderNotes(note);
    });
  };

  renderNotes = (notes) => {
    this.node.innerHTML = '';
    notes.forEach((item) => {
      const noteContainer = document.createElement('div');
      noteContainer.classList.add('notes-container__note');

      const dotsContainer = document.createElement('div');
      dotsContainer.classList.add('note__dots-container');

      for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
      }

      const textContainer = document.createElement('div');
      textContainer.textContent = item.text;
      const deleteField = document.createElement('div');
      deleteField.classList.add('notes-container__dropdown');
      deleteField.style.display = 'none';
      deleteField.textContent = 'Удалить';

      noteContainer.appendChild(dotsContainer);
      noteContainer.appendChild(textContainer);
      dotsContainer.appendChild(deleteField);
      this.node.appendChild(noteContainer);

      dotsContainer.addEventListener('click', function() {
        if ( deleteField.style.display === 'none') {
          deleteField.style.display = 'flex';
        } else {
          deleteField.style.display = 'none';
        };
      });
    });
  };
};