import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
	createRoot(rootElement).render(
		<StrictMode>
			<h2>Hello from React!</h2>
		</StrictMode>
	);
}
