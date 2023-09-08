import { Api } from './api';
import { NoteForm } from './components/noteForm';
import { NotesContainer } from './components/notesContainer';

const changeNoteModalNode = document.querySelector('.change-note-modal');
const noteNode = document.querySelector('.note-form');
const notescontainerNode = document.querySelector('.notes-container');

const api = new Api();
// new ChangeNoteModal(changeNoteModalNode, api);
new NoteForm(noteNode, api);
new NotesContainer(notescontainerNode, api);
