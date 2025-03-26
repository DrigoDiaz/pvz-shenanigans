import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserSelect from './components/Select';
import SearchBar from './components/Searchbar';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>
      <p style={ {display: 'inline-flex'} }>I am looking for: </p>
      <Navbar></Navbar>
      <UserSelect></UserSelect>
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;