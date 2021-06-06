import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import { PrimarySearchAppBar } from './components/header';

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_WALLET_HOST: walletHost,
} = process.env;

function Wallet({ history }) {
  return <MicroFrontend history={history} host={walletHost} name="Wallet" />;
}

function Home() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="home">
        <div className="content">
          <div className="cat">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wallet/" component={Wallet} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
