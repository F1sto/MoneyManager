import React, {Component} from 'react';
import './App.css';
import Statistics from "./components/Statistics/Statistics";
import Counter from "./components/Counter/Counter";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <h1>Мой Кошелек</h1>
            <Counter income={props.state.incomeComponent}
                     spend={props.state.spendComponent}
                     updateSpend={props.updateSpend}
                     updateIncome={props.updateIncome}
                     components={props.state.components}
                     balance={props.state.balance}
                     updateBalance={props.updateBalance}
            />
            <Statistics income={props.state.incomeComponent.income}
                        spend={props.state.spendComponent.spend}
                        balance={props.state.balance}
            />
        </div>
    )
}

export default App;
