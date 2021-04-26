import {React} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ForgotPassword} from './js/authentication/ForgotPassword'
import {Login} from './js/authentication/Login'
import {PrivateRoute} from './js/authentication/PrivateRoute'
import {Profile} from './js/Profile'
import {RMDashboard} from './js/repair-merchant/rm-dashboard'
import {Signup} from './js/authentication/Signup'
import { AuthProvider } from './js/context/authContext'
import {UpdateProfile} from './js/authentication/UpdateProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <AuthProvider>
              <Switch>
                {/* Kira Games */}
                <PrivateRoute exact path="/" component={RMDashboard} />

                {/* Profile */}
                <PrivateRoute exact path="/user" component={Profile} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />

                {/* Auth */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />
                <Route path="/reset-password" component={ForgotPassword} />
              </Switch>
              
            </AuthProvider>
          </Router>
      </header>
    </div>
  
 );
}

export default App;
