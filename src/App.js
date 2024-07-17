import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

function App() {

  return <Router>
    <Routes>
      <Route></Route>
    </Routes>
    <Header />
    <Home />
    <Analytics />
  </Router>
}

export default App;
