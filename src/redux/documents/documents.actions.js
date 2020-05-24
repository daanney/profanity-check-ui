import DocumentActionTypes from './documents.types'

export const loadDocumentsStart =()=> ({
	type: DocumentActionTypes.LOAD_DOCUMENTS_START
})

export const loadDocumentsSuccess =(documents)=> ({
	type: DocumentActionTypes.LOAD_DOCUMENTS_SUCCESS,
	payload: documents
})

export const loadDocumentsFailure =(error)=> ({
	type: DocumentActionTypes.LOAD_DOCUMENTS_FAILURE,
	payload: error
})

export const uploadDocument =(formData)=> ({
	type: DocumentActionTypes.UPLOAD_DOCUMENT,
	payload: formData
})

export const updateMessage =(message)=> ({
	type: DocumentActionTypes.ACTION_MESSAGE,
	payload: message
})