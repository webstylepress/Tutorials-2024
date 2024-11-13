import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
	const notifySuccess = () => toast.success('Operation successful!');
	const notifyError = () => toast.error('Something went wrong.');
	const notifyLoading = () =>
		toast.loading('Loading...', {
			duration: 3000,
			style: {
				background: '#333',
				color: '#fff',
			},
		});
	const notifyCustom = () => {
		toast((t) => (
			<span>
				A <b>custom</b> toast!
				<button
					onClick={() => toast.dismiss(t.id)}
					style={{
						background: 'none',
						border: '1px solid #4CAF50',
						color: '#4CAF50',
						padding: '0.2rem 0.5rem',
						marginLeft: '0.5rem',
						cursor: 'pointer',
					}}>
					Dismiss
				</button>
			</span>
		));
	};
	const notifyPromise = () => {
		const promise = new Promise((resolve, reject) =>
			setTimeout(() => {
				const success = Math.random() > 0.5;
				success ? resolve() : reject();
			}, 2000),
		);

		toast.promise(promise, {
			loading: 'Processing...',
			success: 'Completed successfully!',
			error: 'There was an error!',
		});
	};
	return (
		<div>
			<h1>Toast Notifications</h1>
			<Toaster position='top-right' reverseOrder={false} />
			<button onClick={notifySuccess}>Success Toast</button>
			<button onClick={notifyError}>Error Toast</button>
			<button onClick={notifyLoading}>Loading Toast</button>
			<button onClick={notifyCustom}>Custom Toast</button>
			<button onClick={notifyPromise}>Promise Toast</button>
		</div>
	);
}

export default App;
