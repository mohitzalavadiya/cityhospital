import { Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/list/List";
import Refhook from "./components/Refexample/Refhook";
import About from "./container/departments/About";
import Appointment from "./container/departments/Appointment";
import Contact from "./container/departments/Contact";
import Departments from "./container/departments/Departments";
import Doctors from "./container/departments/Doctors";
import List_Apt from "./container/departments/List_Apt";
import Home from "./container/home/Home";
import Login from "./container/Login";
import Medicine from "./container/medicine/Medicine";
import { persistor, store } from "./redux/store";
import { SnackbarProvider } from 'notistack';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (  
    <>
    <SnackbarProvider maxSnack={3}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Header/>    
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/departments" exact component={Departments} />
      <Route path="/doctors" exact component={Doctors}/>
      <Route path ="/about" exact component={About}/>
      <Route path = "/contact" exact component={Contact}/>
      <Route path ="/login" exact component={Login}/>
      <Route path ="/medicine" exact component={Medicine}/>
      <Route path= "/refhook" exact component={Refhook}/>
      <Route path="/appointment" exact component={Appointment}/>
      <Route path="/list" exact component={List_Apt}/>
    </Switch>
    <Footer/>
    </PersistGate>
    </Provider>
    </SnackbarProvider>
    </>
    

  );
}

export default App;
