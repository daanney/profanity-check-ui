import { combineReducers } from 'redux'

import bannedWordsReducer from './banned-words/banned-words.reducer'
import documentsReducer from './documents/documents.reducer'

const rootReducer = combineReducers({ 
	bannedWords: bannedWordsReducer, 
	documents: documentsReducer, 
})

export default rootReducer