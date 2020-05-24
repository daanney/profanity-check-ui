import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ClientNotesPage from './pages/client-notes/client-notes.page'
import WordListPage from './pages/wordlist/wordlist.page'

import Header from './components/header/header.component'

import './App.scss'

const App =()=> (
	<React.Fragment>
		<Header />

		<main role="main" className="container">
			<Switch>
				<Route exact path='/' component={ClientNotesPage} />
				<Route exact path='/bannedwords' component={WordListPage} />
			</Switch>
		</main>

	</React.Fragment>
)

export default App