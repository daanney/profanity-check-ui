import React from 'react'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectBannedWordList } from '../../redux/banned-words/banned-words.selectors'
import { deleteBannedWord } from '../../redux/banned-words/banned-words.actions'
import Button from 'react-bootstrap/Button'

const BannedWordList =({ bannedWords, deleteBannedWord })=> (
	<div className='words-container'>
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Word</th>
					<th>Description</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			{bannedWords && bannedWords.map((bannedWord) => (
				<tr key={bannedWord.id}>
					<td>{bannedWord.id}</td>
					<td>{bannedWord.name}</td>
					<td>{bannedWord.description}</td>
					<td><Button variant='danger' onClick={() => deleteBannedWord(bannedWord.id)}>Delete</Button></td>
				</tr>
			))}
			</tbody>
		</Table>
	</div>
)

export default connect(
	createStructuredSelector({ bannedWords: selectBannedWordList }),
	(dispatch) => ({ deleteBannedWord: (id) => dispatch(deleteBannedWord(id)) })
)(BannedWordList)