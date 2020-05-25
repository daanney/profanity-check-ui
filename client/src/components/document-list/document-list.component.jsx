import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDocumentList } from '../../redux/documents/documents.selectors'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

import './document-list.styles.scss'

const DocumentList =({ noteId, documents })=> {
	// typically, we would fetch documents related to passed noteId here

	return (
		<React.Fragment>
			<h3>Attached documents</h3>
			<ListGroup className='document-list'>
			{documents && documents.length ? documents.map((doc) => (
				<ListGroup.Item key={doc.id}>
					<span className='filename'>{doc.name}</span>
					<Badge variant='warning' pill>{doc.type}</Badge>
					<Badge variant='secondary' pill>{doc.size > 1024 
						? (doc.size / 1024 > 1024 
							? `${~~(doc.size / 1024 / 1024)}  M` 
							: `${~~(doc.size / 1024)}  K` 
						) : `${doc.size} `}B</Badge> 
				</ListGroup.Item>
			)) : <Alert variant='info'>No documents found</Alert>}
			</ListGroup>
		</React.Fragment>
	)
}

export default connect(
	createStructuredSelector({ documents: selectDocumentList })
)(DocumentList)