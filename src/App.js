import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Pagenotfound from "./Pages/Pagenotfound";
import Chuckymain from "./components/page/chuckymain";


function App() {
  return (
    <Router>
     <Switch>

      <Route exact path='/' component={Main}/>
      <Route path='/chuckjokes' component={Chuckymain}></Route> 
      <Route  component={Pagenotfound}/>
     </Switch>

    </Router>
  );
}

export default App;
