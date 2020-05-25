import { createSelector } from 'reselect'

export const selectDocuments =(state)=> state.documents

export const selectDocumentList = createSelector(
	[selectDocuments],
	documents => documents.documents
)

export const selectActionMessage = createSelector(
	[selectDocuments],
	documents => documents.actionMessage
)