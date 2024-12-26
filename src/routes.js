const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler.js');

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler, // untuk bikin notes, menyimpan catatan
	},
	{
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler, // untuk nampilin notes
  },
	{
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler, // untuk nampilin detail notes saat klik notes diberanda
  },
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteByIdHandler, // untuk edit notes
	},
	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteByIdHandler, // untuk hapus notes
	},
];

module.exports = routes;