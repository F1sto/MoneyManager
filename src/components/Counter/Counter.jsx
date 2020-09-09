import React from "react";
import classes from "./Counter.module.css";
import { renderTree } from "../../index";
import IncomeCounter from "./IncomeCounter/IncomeCounter";
import SpendCounter from "./SpendCounter/SpendCounter";
import { BrowserRouter } from 'react-router-dom';
import { updateIncome, updateSpend } from "../../storage/state";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

const Counter = (props) => {

    let addSpend = () => {
        let spendValueInt = props.spend.newSpendValue;
        let timeNow = moment();
        if (props.balance < spendValueInt) {
            alert('Расход выше баланса')
        } else {
            props.updateBalance(-spendValueInt);

            let spend = {
                time: timeNow.format('YYYY-MM-DD HH:mm'),
                name: props.spend.newSpendName,
                value: spendValueInt
            }
            props.spend.spend.push(spend)
        }
    }
    

    let addIncome = () => {
        let incomeValueInt = Number.parseInt(props.income.newIncomeValue);
        props.updateBalance(incomeValueInt);
        
        let timeNow = moment();

        let income = {
            time: timeNow.format('YYYY-MM-DD HH:mm'),
            name: props.income.newIncomeName,
            value: incomeValueInt,
        }
        props.income.income.push(income)
    }

    let handleSubmit = () => {
        if (props.spend.newSpendValue != '') {
            addSpend();
        }

        if (props.income.newIncomeValue != '') {
            addIncome();
        }

        updateIncome('', '');
        updateSpend('', '');

        renderTree();
    }

    return (
        <BrowserRouter>
            <div className={classes.counter}>
                <div className={classes.count_value}>
                    <div className={classes.item}>
                        <IncomeCounter income={props.income}
                            updateIncome={props.updateIncome}
                            components={props.components}
                            balance={props.balance}
                        />
                    </div>
                    <div className={classes.item}>
                        <SpendCounter spend={props.spend}
                            updateSpend={props.updateSpend}
                            components={props.components}
                        />
                    </div>
                </div>
                <div className={classes.count_btn}>
                    <input onClick={handleSubmit} type="submit" value="Посчитать" />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Counter;