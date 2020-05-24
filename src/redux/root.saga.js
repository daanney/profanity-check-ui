import { all, call } from 'redux-saga/effects'

import { bannedWordsSagas } from './banned-words/banned-words.sagas'
import { documentSagas } from './documents/documents.sagas'

export default function* rootSaga() {
	yield all([ call(bannedWordsSagas), call(documentSagas) ])
}