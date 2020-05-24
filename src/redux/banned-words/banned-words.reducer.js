import BannedWordsActionTypes from './banned-words.types'

const INITIAL_STATE = {
	error: null,
	wordList: null,
	actionMessage: null
}

const bannedWordsReducer =(state = INITIAL_STATE, action)=> {
	switch(action.type) {
		case BannedWordsActionTypes.LOAD_WORDS_SUCCESS:
			return { ...state, error: null, wordList: action.payload }

		case BannedWordsActionTypes.LOAD_WORDS_FAILURE:
			return { ...state, error: action.payload }

		case BannedWordsActionTypes.ACTION_MESSAGE:
			return { ...state, actionMessage: action.payload }

		default: return state
	}
}

export default bannedWordsReducer