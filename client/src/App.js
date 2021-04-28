import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useEffect} from 'react'
import Dashboard from './components/Dashboard';
import Admin from './components/Admin'
import Draft from './components/Draft'

function App() {
  // State Hooks
  // const [fetchedTeamData, setFetchedTeamData] = useState([])
  // const [fetchedPlayerData, setFetchedPlayerData] = useState([]);
  // const [playerSearched, setPlayerSearched] = useState("");
  // const [playerSearchedReturn, setPlayerSearchedReturn] = useState([]);
  // Grabbing Date
  const year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let monthWord = "";
  const date = () => {
    if (month === 3) {
      monthWord = "March"
    } else if (month === 4) {
      monthWord = "April"
    } else if (month === 5) {
      monthWord = "May"
    } else if (month === 6) {
      monthWord = "June"
    } else if (month === 7) {
      monthWord = "July"
    } else if (month === 8) {
      monthWord = "August"
    } else if (month === 9) {
      monthWord = "September"
    }
  }
  date()
  // Use Effect
  useEffect(() => {console.log("effect")}, [])
  return (
    <div className="App">
      <Router>
      <p>Dong League</p>
        <Switch>
        <Route exact path="/">
          <Dashboard
            month={monthWord}
          />
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route exact path="/draft">
          <Draft
            month={monthWord}
            year={year}
          />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
