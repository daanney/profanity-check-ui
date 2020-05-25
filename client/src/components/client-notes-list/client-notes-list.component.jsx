import React from 'react'

// Todo: Receive data from backend
import { NOTES_LIST } from './client-notes-list.data'
import ClientNote from '../client-note/client-note.component'

const ClientNotesList =()=>  (
	<div className='cases-container'>
		{ NOTES_LIST.map((note) => <ClientNote key={note.id} note={note} />) }
	</div>
)

export default ClientNotesList