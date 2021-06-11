import logo from './logo.svg';
import './App.css';
import Table from './Table'
import SidePane from './components/SidePane'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <SidePane />
      <Nav />
      <Table />
    </div>
  );
}

export default App;
