import logo from './logo.svg';
import './App.css';
import Home from "./testpage"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to="/Home">Home</Link>
          <Routes>
            <Route path="/Home" element = {<Home />} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
