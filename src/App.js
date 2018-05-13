import React, {Component} from 'react';
import logo from './Octocat.png';
import './App.css';
import Repos from "./Repos";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to the Github Repo Explorer</h1>
                </header>
                <Repos/>
            </div>
        );
    }
}

export default App;
