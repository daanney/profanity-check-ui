import { takeLatest, put, all, call } from 'redux-saga/effects'
import DocumentActionTypes from './documents.types'
import { loadDocumentsStart, loadDocumentsSuccess, loadDocumentsFailure, updateMessage } from './documents.actions'
import axios from 'axios'

export function* loadDocuments() {
	try {
		const response = yield axios.get('/api/documents')
		if(response.error) yield put(loadDocumentsFailure(response.error))
		yield put(loadDocumentsSuccess(response.data))
	}catch(error) {
		yield put(loadDocumentsFailure(error))
	}
}

export function* uploadDocument({ payload }) {
	let message = { type: 'danger', body: 'An unhandled error occured. Please contact the admins ..' }

	try {
		yield put(updateMessage({ type: 'info', body: 'Creating record ...' }))
		const config = { headers: {'content-type': 'multipart/form-data'}}
		const response = yield axios.post('/api/documents', payload, config)
		message = { type: 'success', body: response.data.message }
	}catch(error) {
		if(error.response) {
			// TODO: better error handling. for this use case, we assume that the file is too large
			if(error.response.data.message) message.body = error.response.data.message
			else if(error.response.status === 413) message.body = 'The supplied file is too large'
		}
	}

	yield put(updateMessage(message))
	// refresh document list in any result above
	yield put(loadDocumentsStart())
}

export function* onLoadDocumentsStart() {
	yield takeLatest(DocumentActionTypes.LOAD_DOCUMENTS_START, loadDocuments)
}

export function* onUploadDocument() {
	yield takeLatest(DocumentActionTypes.UPLOAD_DOCUMENT, uploadDocument)
}

export function* documentSagas() {
	yield all([
		call(onLoadDocumentsStart),
		call(onUploadDocument)
	])
}