import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App'
import ErrorMessage from './ErrorMessage'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
		  <App />
    </ErrorBoundary>
	</React.StrictMode>
)