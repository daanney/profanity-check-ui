import React from 'react'
import ClientNotesList from '../../components/client-notes-list/client-notes-list.component'
// Todo: Receive data from backend
import { NOTES_LIST } from './client-notes.data'

const ClientNotesPage =()=> {

	return (
		<div className='notes-container'>
			<h1>Recent Client Notes</h1>
			<ClientNotesList notes={NOTES_LIST} />
		</div>
	)
}

export default ClientNotesPage