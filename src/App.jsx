import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './pages/Root';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio/' element={<Root />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;