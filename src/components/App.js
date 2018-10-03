import React from 'react';
import '../style/App.css';
import Board from './Board';
import Restart from './Restart';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Memory Game</h1>
				<div>
					<Restart />
				</div>
			</header>

			<div className="Game">
				<Board />
			</div>
		</div>
	);
}

export default App;
