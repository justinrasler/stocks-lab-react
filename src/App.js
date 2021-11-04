import {Route, Switch} from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import About from "./pages/about";
import Nav from "./components/nav";
import Stocks from "./pages/stocks";
import stockData from "./stock-data";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/stocks">
        <Dashboard stockData={stockData}/>
      </Route>
      <Route path="/stocks/:symbol" 
      render={(routerProps) =>  <Stocks stockData={stockData} {...routerProps}/>}
        />
      <Route path="/about">
        <About/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;