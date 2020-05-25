import React from 'react'

import ClientNote from '../client-note/client-note.component'

const ClientNotesList =({ notes })=>  (
	<div className='notes-container'>
		{ notes.map((note) => <ClientNote key={note.id} note={note} />) }
	</div>
)

export default ClientNotesList