import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {updateBalance, updateIncome, updateSpend} from './storage/state'

export let renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateSpend={updateSpend} updateIncome={updateIncome} updateBalance={updateBalance} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    serviceWorker.unregister();
}

renderTree()

