import './App.css';
import SignUp from './components/SignUp/SignUp';
import SuccessReact from './components/SuccessCard/SuccessCard';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/newsletter-sign-up-form-with-success-message">
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="success" element={<SuccessReact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
