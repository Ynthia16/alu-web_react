import './App.css';
import logo from './assets/logo.jpeg';

function App() {
    return (
        <div className="container">
            <div className="App-header">
                <img src={logo} alt="logo" />
                <h1>School dashboard</h1>
            </div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
            </div>

            <div className="App-footer">
                <p>Copyright 2020 - holberton School</p>
            </div>
        </div>
    );
}

export default App;