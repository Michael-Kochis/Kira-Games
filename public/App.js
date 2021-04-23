import './App.css';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Dashboard} from './js/dashboard'
import {ForgotPassword} from './js/ForgotPassword'
import {Login} from './js/Login'
import {PrivateRoute} from './js/PrivateRoute'
import {Signup} from './js/Signup'
import { AuthProvider } from './js/context/authContext'
import {UpdateProfile} from './js/UpdateProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className="d-flex align-items-center justify-content-center">
          <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />
                <Route path="/reset-password" component={ForgotPassword} />
              </Switch>
              
            </AuthProvider>
          </Router>
        </Container>        
      </header>
    </div>
  
 );
}

export default App;
