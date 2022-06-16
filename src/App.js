import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./container/departments/About";
import Contact from "./container/departments/Contact";
import Departments from "./container/departments/Departments";
import Doctors from "./container/departments/Doctors";
import Home from "./container/home/Home";
import Login from "./container/Login";
import Medicine from "./container/medicine/Medicine";

function App() {
  return (
    <>
    <Header/>
    
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/departments" exact component={Departments} />
      <Route path="/doctors" exact component={Doctors}/>
      <Route path ="/about" exact component={About}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path ="/login" exact component={Login}/>
      <Route path ="/medicine" exact component={Medicine}/>
    </Switch>

    <Footer/>
    </>
    

  );
}

export default App;
