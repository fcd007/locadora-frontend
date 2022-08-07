import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  CriarFuncionarioComponent as CriarFuncionario,
  ListarFuncionarioComponent as ListarFuncionario,
  VisualizarFuncionarioComponent as VisualizarFuncionario,
} from './components/';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListarFuncionario}></Route>
                <Route path="/funcionarios" component={ListarFuncionario}></Route>
                <Route
                  path="/criar-funcionarios/:id"
                  component={CriarFuncionario}
                ></Route>
                <Route
                  path="/visualizar-funcionarios/:id"
                  component={VisualizarFuncionario}
                ></Route>
              </Switch>
            </div>
          </Home >
        </Router>
      </div>
    );
  }
}

export default App;
