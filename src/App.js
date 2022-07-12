import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard, Login, Error, AuthWrapper, PrivateRoute } from './pages';

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</AuthWrapper>
	);
}

export default App;
