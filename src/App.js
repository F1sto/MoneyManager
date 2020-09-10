import React, {Component} from 'react';
import './App.css';
import Statistics from "./components/Statistics/Statistics";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';
import IncomeCounter from './components/Counter/IncomeCounter/IncomeCounter';
import SpendCounter from './components/Counter/SpendCounter/SpendCounter';
import Title from './components/Title/Title';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
               <Title balance={props.state.balance} />
                <Navbar components={props.state.components} />
                <Route path='/income'
                    render={ () => <IncomeCounter 
                        income={props.state.incomeComponent}
                        updateIncome={props.updateIncome}
                        components={props.state.components}
                        balance={props.state.balance}
                        updateBalance={props.updateBalance}
                    /> } />
                    <Route path='/spend' 
                        render={ () => <SpendCounter 
                            spend={props.state.spendComponent}
                            updateSpend={props.updateSpend}
                            components={props.state.components}
                            balance={props.state.balance}
                            updateBalance={props.updateBalance}
                        />}/>
                <Counter income={props.state.incomeComponent}
                     spend={props.state.spendComponent}
                     balance={props.state.balance}
                     updateBalance={props.updateBalance}
                />
                <Statistics income={props.state.incomeComponent.income}
                    spend={props.state.spendComponent.spend}
                    balance={props.state.balance}
                />
            </div>
        </BrowserRouter>
    )
}

export default App;
