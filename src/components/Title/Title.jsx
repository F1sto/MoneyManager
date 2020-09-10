import React from 'react';
import classes from './Title.module.css'

const Title = (props) => {
    return (
        <div>
            <h1>Мой Кошелек</h1>
            <p className={classes.balance}>Баланс: {props.balance}</p>
        </div>
    )
}

export default Title;