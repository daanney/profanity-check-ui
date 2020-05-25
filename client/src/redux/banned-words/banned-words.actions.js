import BannedWordsActionTypes from './banned-words.types'

export const loadBannedWordsStart =()=> ({
	type: BannedWordsActionTypes.LOAD_WORDS_START
})

export const loadBannedWordsSuccess =(bannedWords)=> ({
	type: BannedWordsActionTypes.LOAD_WORDS_SUCCESS,
	payload: bannedWords
})

export const loadBannedWordsFailure =(error)=> ({
	type: BannedWordsActionTypes.LOAD_WORDS_FAILURE,
	payload: error
})

export const createBannedWord =(data)=> ({
	type: BannedWordsActionTypes.CREATE_WORD,
	payload: data
})

export const deleteBannedWord =(id)=> ({
	type: BannedWordsActionTypes.DELETE_WORD,
	payload: id
})

export const updateMessage =(message)=> ({
	type: BannedWordsActionTypes.WORDS_ACTION_MESSAGE,
	payload: message
})