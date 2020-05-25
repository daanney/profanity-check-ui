import { takeLatest, put, all, call } from 'redux-saga/effects'
import BannedWordsActionTypes from './banned-words.types'
import { loadBannedWordsSuccess, loadBannedWordsFailure, loadBannedWordsStart, updateMessage } from './banned-words.actions'
import axios from 'axios'

export function* loadBannedWords() {
	try {
		const response = yield axios.get('/api/bannedwords')
		if(response.error) yield put(loadBannedWordsFailure(response.error))
		yield put(loadBannedWordsSuccess(response.data))
	}catch(error) {
		yield put(loadBannedWordsFailure(error))
	}
}

export function* createBannedWord({ payload }) {
	try {
		yield put(updateMessage({ type: 'info', body: 'Creating record ...' }))
		const response = yield axios.post('/api/bannedwords', payload)
		yield put(updateMessage({ type: 'success', body: response.data.message }))
		yield put(loadBannedWordsStart())
	}catch(error) {
		console.log(error);
		console.log(error.response);
		yield put(updateMessage({ type: 'danger', body: error.response.data.message }))
	}
}

export function* deleteBannedWord({ payload }) {
	try {
		yield put(updateMessage({ type: 'info', body: 'Deleting record ...' }))
		const response = yield axios.delete(`/api/bannedwords/${payload}`)
		yield put(updateMessage({ type: 'success', body: response.data.message }))
		yield put(loadBannedWordsStart())
	}catch(error) {
		yield put(updateMessage({ type: 'danger', body: error.response.data.message }))
	}
}

export function* onLoadBannedWordsStart() {
	yield takeLatest(BannedWordsActionTypes.LOAD_WORDS_START, loadBannedWords)
}

export function* onCreateBannedWord() {
	yield takeLatest(BannedWordsActionTypes.CREATE_WORD, createBannedWord)
}

export function* onDeleteBannedWord() {
	yield takeLatest(BannedWordsActionTypes.DELETE_WORD, deleteBannedWord)
}

export function* bannedWordsSagas() {
	yield all([
		call(onLoadBannedWordsStart),
		call(onCreateBannedWord),
		call(onDeleteBannedWord)
	])
}