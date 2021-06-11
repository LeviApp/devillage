import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Posts from './components/Posts'

import SidePane from './components/SidePane'
import Nav from './components/Nav'
import { Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <SidePane />
      <Nav />
      <Route exact path="/" render={(props) =>  <Redirect to="/users" />} />

      <Route exact path="/users" render={(props) =>  <Table />} />
      <Route exact path="/posts" render={(props) =>  <Posts />} />

    </div>
  );
}

export default App;
