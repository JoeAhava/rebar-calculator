import React, { useState } from "react";
import "./App.css";

function App() {
	const [valueL1, setValueL1] = useState(null);
	const [valueQ1, setValueQ1] = useState(null);

	const [valueL2, setValueL2] = useState(null);

	const [valueQ2, setValueQ2] = useState(null);

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<input
						type={"number"}
						onChange={(e) => setValueL1(e.target.value)}
						value={valueL1}
						placeholder="Length 1"
					/>
					<input
						type={"number"}
						onChange={(e) => setValueQ1(e.target.value)}
						value={valueQ1}
						placeholder="Quantity 1"
					/>
				</div>
				<div>
					<input
						type={"number"}
						onChange={(e) => setValueL2(e.target.value)}
						value={valueL2}
						placeholder="Length 2"
					/>
					<input
						type={"number"}
						onChange={(e) => setValueQ2(e.target.value)}
						value={valueQ2}
						placeholder="Quantity 2"
					/>
				</div>
				<button onClick={(e) => e.preventDefault()}>Calculate</button>
				<p>
					Min Number of rebars is <code>{0}</code>
				</p>
			</header>
		</div>
	);
}

export default App;
