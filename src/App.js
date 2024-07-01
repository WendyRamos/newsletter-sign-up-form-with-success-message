import './App.css';
import SignUp from './components/SignUp/SignUp';
import SuccessReact from './components/SuccessCard/SuccessCard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<SuccessReact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
