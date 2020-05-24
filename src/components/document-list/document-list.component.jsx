import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDocumentList } from '../../redux/documents/documents.selectors'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

const DocumentList =({ documents })=> {
	return (
		<React.Fragment>
			<h3>Attached documents</h3>
			<ListGroup>
			{documents && documents.length ? documents.map((doc) => (
				<ListGroup.Item key={doc.id}>
					<Badge variant='secondary'>{~~(doc.size / 1024)} KB</Badge> 
					<span> {doc.name}</span> 
					{JSON.stringify(doc)}
				</ListGroup.Item>
			)) : <Alert variant='info'>No documents found</Alert>}
			</ListGroup>
		</React.Fragment>
	)
}

export default connect(
	createStructuredSelector({ documents: selectDocumentList })
)(DocumentList)