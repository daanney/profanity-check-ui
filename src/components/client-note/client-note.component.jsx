import React, { useState, useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectActionMessage } from '../../redux/documents/documents.selectors'
import { loadDocumentsStart, uploadDocument } from '../../redux/documents/documents.actions'
import DocumentList from '../document-list/document-list.component'
import Alert from 'react-bootstrap/Alert'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ClientNote =({ note, message, loadDocumentsStart, uploadDocument })=> {
	const [ file, setFile ] = useState(null)

	useEffect(() => { loadDocumentsStart() }, [loadDocumentsStart])

	const handleChange =(event)=> {
		const { files } = event.target
		setFile(files[0])
	}

	const triggerUpload =(event)=> {
		event.preventDefault()
		if(!file) return
		const data = new FormData()
		data.append('file', file)
		uploadDocument(data)
		setFile(null)
	}

	return (
		<Jumbotron>
			<h2>{note.name}</h2>
			<p>{note.description}</p>
			<Suspense fallback={<Alert variant='primary'>Loading ...</Alert>}>
				<DocumentList />
			</Suspense>
			<h3>Attach documents</h3>
			{ message && <Alert variant={message.type}>{message.body}</Alert> }
			<Form onSubmit={triggerUpload}>
				<Form.Group>
					<Form.File name='file' onChange={handleChange} required custom label={(file && file.name) || 'No file selected'} />
				</Form.Group>
				<Button type='submit' variant='primary' disabled={!file}>Upload</Button>
			</Form>
		</Jumbotron>
	)
}

export default connect(
	createStructuredSelector({ 
		message: selectActionMessage 
	}),
	(dispatch) => ({ 
		loadDocumentsStart: () => dispatch(loadDocumentsStart()),
		uploadDocument: (formData) => dispatch(uploadDocument(formData))
	})
)(ClientNote)