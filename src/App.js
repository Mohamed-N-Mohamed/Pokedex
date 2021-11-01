import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import {
  browserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Register/>

    </div>
  );
}

export default App;
