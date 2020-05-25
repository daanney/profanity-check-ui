import React, { useState, useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import BannedWordList from '../../components/banned-word-list/banned-word-list.component'
import Spinner from '../../components/spinner/spinner.component'
import { createStructuredSelector } from 'reselect'
import { selectActionMessage } from '../../redux/banned-words/banned-words.selectors'
import { loadBannedWordsStart, createBannedWord } from '../../redux/banned-words/banned-words.actions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

const WordListPage =({ message, loadBannedWordsStart, createBannedWord })=> {
	useEffect(() => { loadBannedWordsStart() }, [loadBannedWordsStart])

	const [ bannedWordData, setBannedWordData ] = useState({ name: '', description: '' })
	const { name, description } = bannedWordData

	const onFormSubmit =(event)=> {
		event.preventDefault()
		if(!name) return;
		createBannedWord(bannedWordData)
		setBannedWordData({ name: '', description: '' })
	}

	const handleChange =(e)=> {
		const { value, name } = e.target;
		setBannedWordData({ ...bannedWordData, [name]: value })
	}

	return (
		<div className='bannedwordlist-container'>
			<h1>List of banned words / phrases</h1>
			<Suspense fallback={<Spinner />}>
				<BannedWordList />
			</Suspense>
			
			<Jumbotron>
				<h2>Create New</h2>
				{ message && <Alert variant={message.type}>{message.body}</Alert> }
				<Form onSubmit={onFormSubmit}>
					<Form.Row>
						<Col>
							<Form.Group>
								<Form.Label>Name / phrase</Form.Label>
								<Form.Control type='text' onChange={handleChange} name='name' required
									value={name} placeholder='Enter a word or phrase to blacklist' />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control type='text' onChange={handleChange} name='description'
									value={description} placeholder='An optional description for the blocked data' />
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col>
							<Button type='submit' variant='primary'>Upload</Button>
						</Col>
					</Form.Row>
				</Form>
			</Jumbotron>
		</div>
	)
}

export default connect(
	createStructuredSelector({ 
		message: selectActionMessage 
	}),
	(dispatch) => ({ 
		loadBannedWordsStart: () => dispatch(loadBannedWordsStart()),
		createBannedWord: (data) => dispatch(createBannedWord(data))
	})
)(WordListPage)