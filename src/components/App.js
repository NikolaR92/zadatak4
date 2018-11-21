import React from 'react';
import { Router, Route } from 'react-router-dom';
import '../style/App.css';
import Board from './Board';
import NewGame from './NewGame';
import Options from './Options';
import history from '../js/history';
import Option from './Option';

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Memory Game</h1>
					<div>
						<NewGame />
						<Option />
					</div>
				</header>


				<div className="Game">
					<Route path="/game" component={Board} />
					<Route path="/options" component={Options} />
				</div>

			</div>
		</Router>
	);
}

export default App;
