import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Contact from './Component/Pages/Contact/Contact';
import Home from './Component/Pages/Home/Home';
import AddMoreFood from './Component/Pages/Home/Services/AddMoreFood/AddMoreFood';
import Details from './Component/Pages/Home/Services/Details/Details';
import PlaceOrder from './Component/Pages/Home/Services/Details/PlaceOrder/PlaceOrder';
import PrivateRoute from './Component/Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Component/Pages/ManageOrder/ManageOrder';
import MyOrders from './Component/Pages/MyOrders/MyOrders';
import NotFound from './Component/Pages/NotFound/NotFound';
import SignUp from './Component/Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/add_more_food'>
              <AddMoreFood></AddMoreFood>
            </Route>
            <Route exact path='/details/place-order/:ordered_id'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path='/manage-order'>
              <ManageOrder></ManageOrder>
            </Route>
            <PrivateRoute path='/my-order'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/register'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute exact path='/details/:combo_id'>
              <Details></Details>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
