import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import {Signup} from './js/Signup'
import { AuthProvider } from './js/context/authContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthProvider>
          <Container className="d-flex align-items-center justify-content-center">
            <Signup />
          </Container>
        </AuthProvider>
        
      </header>
    </div>
  
 );
}

export default App;
