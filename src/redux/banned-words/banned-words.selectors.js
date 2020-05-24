import { createSelector } from 'reselect'

export const selectBannedWords =(state)=> state.bannedWords

export const selectBannedWordList = createSelector(
	[selectBannedWords],
	bannedWords => bannedWords.wordList
)

export const selectActionMessage = createSelector(
	[selectBannedWords],
	bannedWords => bannedWords.actionMessage
)