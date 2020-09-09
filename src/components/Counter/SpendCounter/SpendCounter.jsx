import React from "react";
import SpendComponents from "./SpendComponents";
import {renderTree} from "../../../index";

let SpendCounter = (props) => {

    let newSpendValue = React.createRef();
    let newSpendName = React.createRef();

    let spendComponents =
        props.components.spend.map( (s) => <SpendComponents name={s.name} />)

    let handleChange = () => {
        let name = newSpendName.current.value;
        let value = newSpendValue.current.value;
        let valueNum = +value;

        if (valueNum > 0 || value === '') {
            props.updateSpend(name, valueNum);
        }
    }

    let addSpendItem = () => {
        let promptValue = prompt();
        let newSpendComponent = {
            name: promptValue
        }

        props.components.spend.push(newSpendComponent);
        renderTree();
    }

    return (
        <div>
            <input ref={newSpendValue} type='number' onChange={handleChange} placeholder='Расход'
                   value={props.spend.newSpendValue}/>
            <select ref={newSpendName} onChange={handleChange}>
                {spendComponents}
            </select>
            <button onClick={addSpendItem}>Добавить тип расхода</button>
        </div>
    )

}

export default SpendCounter