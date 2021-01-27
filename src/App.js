import Header from './components/Header/Header'

function App() {
	return (
		<>
		<Header />
		<div className="container">
			<div className="grid">
				<div className="grid__col-12">
					12
				</div>
			</div>
			<div className="grid">
				<div className="grid__col-1">
					1
				</div>
				<div className="grid__col-11">
					11
				</div>
			</div>
		</div>
		</>
	);
}

export default App;
