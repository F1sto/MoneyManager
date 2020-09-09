import React from "react";
import { renderTree } from "../../../index";
import IncomeComponents from "./IncomeComponents";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

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

    let addIncomeItem = () => {
        let promptValue = prompt();
        let newIncomeComponent = {
            name: promptValue
        }

        props.components.income.push(newIncomeComponent);

        renderTree();
    }

    return (
        <div>
            <input ref={newIncomeValue} type='number' min={0} onChange={handleChange} placeholder='Расход'
                value={props.income.newIncomeValue} />
            <select ref={newIncomeName} onChange={handleChange}>
                {incomeComponents}
            </select>
            <button onClick={addIncomeItem}>Добавить тип дохода</button>
        </div>
    )

}

export default IncomeCounter;