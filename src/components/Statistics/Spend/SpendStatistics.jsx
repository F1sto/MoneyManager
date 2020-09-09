import React from "react";
import classes from "../Statistics.module.css";

const SpendStatistics = (props) => {
    return (
       <p><span className={classes.time}>{props.time}</span> {props.name}: {props.value}</p>
    )
}

export default SpendStatistics;