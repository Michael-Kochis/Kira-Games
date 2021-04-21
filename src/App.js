import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import {Signup} from './js/Signup'

function App() {
  return (
    <html>
      <head>
        <title>Kira Games - Login and Registration</title>
      </head>
      <body>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Container className="d-flex align-items-center justify-content-center">
              <Signup />
            </Container>
          </header>
        </div>
      </body>
    </html>
  );
}

export default App;
