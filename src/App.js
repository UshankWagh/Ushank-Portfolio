import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return <Router>
    <Routes>
      <Route></Route>
    </Routes>
    <Header />
    <Home />
  </Router>
}

export default App;
