import React from "react";
import classes from "./Statistics.module.css"
import IncomeStatistics from "./Income/IncomeStatistics";
import SpendStatistics from "./Spend/SpendStatistics";


const Statistics = (props) => {

    let incomeElements =
        props.income.map( (i) => <IncomeStatistics time={i.time} name={i.name} value={i.value} />)

    let spendElements =
        props.spend.map( (s) => <SpendStatistics time={s.time} name={s.name} value={s.value} />)

    return (
        <div className={classes.statistics_padding}>
            {/* <p className={classes.balance}>Баланс: {props.balance}</p> */}
            <h2 className={classes.title}>История</h2>
            <div className={classes.statistics}>
                <div className={classes.text}>
                    <h3 className={classes.subtitle}>Доход</h3>
                    {incomeElements}
                </div>
                <div className={classes.text}>
                    <h3 className={classes.subtitle}>Расходы</h3>
                    {spendElements}
                </div>
            </div>
        </div>
    )
}

export default Statistics;