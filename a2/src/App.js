import Todolist from "./components/TodoList/todolist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataTable from "./components/DataTable/DataTable";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/' component={DataTable} />
      <Route exact path='/todo' component={Todolist} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
