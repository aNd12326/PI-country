import { Route, Switch } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/countryDetails";
import Formulario from "./views/formulario";
import Home from "./views/home";
import Landing from "./views/landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/create" exact>
          <Formulario />
        </Route>
        <Route path="/details/:id" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
