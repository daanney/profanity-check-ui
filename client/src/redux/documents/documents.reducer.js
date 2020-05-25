import DocumentActionTypes from './documents.types'

const INITIAL_STATE = {
	error: null,
	documents: null,
	actionMessage: null
}

const documentsReducer =(state = INITIAL_STATE, action)=> {
	switch(action.type) {
		case DocumentActionTypes.LOAD_DOCUMENTS_SUCCESS:
			return { ...state, error: null, documents: action.payload }

		case DocumentActionTypes.LOAD_DOCUMENTS_FAILURE:
			return { ...state, error: action.payload }

		case DocumentActionTypes.DOCUMENTS_ACTION_MESSAGE:
			return { ...state, actionMessage: action.payload }

		default: return state
	}
}

export default documentsReducer