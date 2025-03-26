import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserSelect from './components/Select';
import SearchBar from './components/Searchbar';
import Home from './pages/Home';
import About from './pages/About';
import { Box } from '@mui/material';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '50vw'}}>
        <p style={ {margin: 'auto'}}>I am looking for: </p>
        <UserSelect></UserSelect>
      </Box>
  
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;