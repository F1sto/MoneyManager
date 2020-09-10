import React from "react";
import {NavLink } from "react-router-dom";
import { renderTree } from "../..";
import classes from "./Navbar.module.css";

const Navbar = (props) => {

    let addSpendItem = () => {
        let promptValue = prompt();
        let newSpendComponent = {
            name: promptValue
        }

        props.components.spend.push(newSpendComponent);
       renderTree();
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
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/income' >Добавить доход</NavLink>
            </div>
            <dvi className={classes.item}>
                <NavLink to='/spend'>Добавить расход</NavLink>
            </dvi>
            <div className={classes.item}>
                <button onClick={addIncomeItem}>Новый тип дохода</button>
            </div>
            <div className={classes.item}>
                <button onClick={addSpendItem}>Новый тип расхода</button>
            </div>
        </nav>
    )
}

export default Navbar;