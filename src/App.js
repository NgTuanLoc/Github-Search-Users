import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Dashboard, Login, Error } from './pages'


function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
