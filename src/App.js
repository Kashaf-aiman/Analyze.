
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Container} from '@mui/material';
import NavBar from './components/Navbar/NavBar';
import Welcome from './components/Welcome';
import Card from './components/Cards/Card';
import Charts from './components/Graph/Charts';

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Sidebar/>
      <Welcome />
      <Card />
      <Charts />
    </Container>
  );
}

export default App;
