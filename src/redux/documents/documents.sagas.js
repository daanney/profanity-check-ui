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
	try {
		yield put(updateMessage({ type: 'info', body: 'Creating record ...' }))
		const config = { headers: {'content-type': 'multipart/form-data'}}
		const response = yield axios.post('/api/documents', payload, config)
		yield put(updateMessage({ type: 'success', body: response.data.message }))
		yield put(loadDocumentsStart())
	}catch(error) {
		console.log(error);
		console.log(error.response);
		yield put(updateMessage({ type: 'danger', body: error.response.data.message }))
	}
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