import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://www.sitename.com/script.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<>
			<div>webstylepress</div>
		</>
	);
}

export default App;
