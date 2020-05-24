import React from 'react'
import ClientNotesList from '../../components/client-notes-list/client-notes-list.component'

const ClientNotesPage =()=> {

	return (
		<div className='notes-container'>
			<h1>Current open client notes</h1>
			<ClientNotesList />
		</div>
	)
}

export default ClientNotesPage