import { useState } from 'react';
import './App.css';

function App() {
	const [state, setState] = useState({
		user: {
			name: 'John',
			age: 30,
			address: {
				street: '123 Main St',
				city: 'New York',
				distance: 10,
			},
		},
	});
	const incrementDistance = () => {
		setState((prevState) => ({
			...prevState,
			user: {
				...prevState.user,
				address: {
					...prevState.user.address,
					distance: prevState.user.address.distance + 1,
				},
			},
		}));
	};
	return (
		<div>
			<h3>User Information</h3>
			<p>Name: {state.user.name}</p>
			<p>Age: {state.user.age}</p>
			<p>Street: {state.user.address.street}</p>
			<p>City: {state.user.address.city}</p>
			<p>Distance: {state.user.address.distance}</p>
			<button onClick={incrementDistance}>
				Increment Distance - {state.user.address.distance}
			</button>
		</div>
	);
}

export default App;
