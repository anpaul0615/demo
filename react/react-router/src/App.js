import React, { Component } from 'react';
import { 
  BrowserRouter, Route, Switch 
} from 'react-router-dom';
import Header from './components/Header';
import { 
  Home, About, Posts, Post
} from './pages';


class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Header/>
              <Route exact path="/" component={Home}/>
              <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/posts/:id" component={Post}/>
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
}

export default App;