import React from "react";
import IncomeComponents from "./IncomeComponents";
import classes from "./IncomeCounter.module.css"
import 'moment-timezone';
import moment from 'moment';
import { renderTree } from "../../..";
import { updateIncome } from "../../../storage/state";

let IncomeCounter = (props) => {

    let newIncomeName = React.createRef();
    let newIncomeValue = React.createRef();

    let incomeComponents =
        props.components.income.map((i) => <IncomeComponents name={i.name} />)

    let handleChange = () => {
        let name = newIncomeName.current.value;
        let value = newIncomeValue.current.value;
        let valueNum = +value;

        if (valueNum > 0 || value === '') {
            props.updateIncome(name, valueNum);
        }
    }

    // let handleSubmit = () => {

    //     if (props.income.newIncomeValue != '') {
    //         addIncome();
    //     }

    //     updateIncome('', '');

    //     renderTree();
    // }

    // let addIncome = () => {
    //     let incomeValueInt = Number.parseInt(props.income.newIncomeValue);
    //     props.updateBalance(incomeValueInt);
        
    //     let timeNow = moment();

    //     let income = {
    //         time: timeNow.format('YYYY-MM-DD HH:mm'),
    //         name: props.income.newIncomeName,
    //         value: incomeValueInt,
    //     }
    //     props.income.income.push(income)
    // }

    // let addIncomeItem = () => {
    //     let promptValue = prompt();
    //     let newIncomeComponent = {
    //         name: promptValue
    //     }

    //     props.components.income.push(newIncomeComponent);

    //     renderTree();
    // }

    return (
        <div className={classes.item}>
            <input ref={newIncomeValue} type='number' min={0} onChange={handleChange} placeholder='Доход'
                value={props.income.newIncomeValue} />
            <select ref={newIncomeName} onChange={handleChange}>
                {incomeComponents}
            </select>
            {/* <button onClick={handleSubmit}>Добавить</button> */}
        </div>
    )

}

export default IncomeCounter;