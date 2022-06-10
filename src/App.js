import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Departments from "./container/departments/Departments";
import Doctors from "./container/departments/Doctors";
import Home from "./container/home/Home";

function App() {
  return (
    <>
    <Header/>
    
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/departments" exact component={Departments} />
      <Route path="/doctors" exact component={Doctors}/>
    </Switch>

    <Footer/>
    </>
    

  );
}

export default App;
