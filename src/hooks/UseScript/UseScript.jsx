import { useEffect } from 'react';

const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

export default useScript;

/*
// usage

import useScript from 'hooks/UseScript/UseScript.jsx';

const MyComponent = props => {
  useScript('https://www.sitename.com/script.js');

  // rest of your component
}

*/
