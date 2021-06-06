/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import { CreditCard, AccountBalance } from '@material-ui/icons';

import MicroFrontend from './MicroFrontend';

import { PrimarySearchAppBar } from './components/header';
import { BottomNavigation } from './components/bottom-navigation';

import './App.css';

// eslint-disable-next-line no-unused-vars
const defaultHistory = createBrowserHistory();

const {
  REACT_APP_WALLET_HOST: walletHost,
  REACT_APP_CREDIT_HOST: creditHost,
  REACT_APP_DEPOSIT_HOST: depositHost,
} = process.env;

// eslint-disable-next-line react/prop-types
function Wallet({ history }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <MicroFrontend history={history} host={walletHost} name="Wallet" />;
}

// eslint-disable-next-line react/prop-types
function Credit({ history }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <MicroFrontend history={history} host={creditHost} name="Credit" />;
}

// eslint-disable-next-line react/prop-types
function Deposit({ history }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <MicroFrontend history={history} host={depositHost} name="Deposit" />;
}

function Home() {
  const [value, setValue] = useState('wallet');

  const handleWalletClick = () => {
    setValue('wallet');
  };

  const handleCreditClick = () => {
    setValue('credit');
  };

  const handleDepositClick = () => {
    setValue('deposit');
  };

  return (
    <div className="root">
      <PrimarySearchAppBar />
      <div className="fullName">Арина Боброва</div>
      <div className="customLabel">Текущие счета и инструменты</div>
      <div className="services">
        <div
          className="wallet"
          onClick={handleWalletClick}
          onKeyDown={() => {}}
        >
          <div className="mainTitle">Кошелек</div>
          <div className="label">На счете:</div>
          <div className="account">150 813, 48 ₽</div>
        </div>
        <div
          className="wallet"
          onClick={handleCreditClick}
          onKeyDown={() => {}}
        >
          <div className="mainTitle secondaryFont">Кредитная карта</div>
          <div className="account">
            <CreditCard />
          </div>
        </div>
        <div
          className="wallet"
          onClick={handleDepositClick}
          onKeyDown={() => {}}
        >
          <div className="mainTitle secondaryFont">Кредитная карта</div>
          <div className="account">
            <AccountBalance />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div
            className="mainWallet"
            onClick={handleWalletClick}
            onKeyDown={() => {}}
          >
            <div className="mainTitle">
              {value === 'wallet' && <Wallet />}
              {value === 'credit' && <Credit />}
              {value === 'deposit' && <Deposit />}
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wallet/" component={Wallet} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

Sentry.init({
  dsn: "https://0733acf987c54215a75744303a6bd21e@o334702.ingest.sentry.io/5802448",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export default App;
