import { observer } from '../observer';

export class NoteForm {
  constructor(node, api) {
    this.node = node;
    this.api = api;
    this.node.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = this.node.querySelector('.note-form__entry-field');
      const text = input.value;
      this.api.createNote({ text }).then((r) => {
        observer.fire('noteCreated');
      });
    });
  }
}
