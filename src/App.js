import React, {Component} from "react";
import './App.scss';
import MainChatContent from "./components/MainChatContent/MainChatContent";
import Login from "./components/Login/Login";

class App extends Component{
    render() {
      return (
          <div className="App">
              <main className="App-main">
                  <MainChatContent/>
              </main>
              <footer className="App-footer" id="footer">
                  <Login/>
              </footer>
          </div>
      );
  }
}

export default App;
