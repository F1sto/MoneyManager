import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
import classes from "../Statistics.module.css";

const IncomeStatistics = (props) => {
    return (
        // <Moment format='YYYY-MM-DD HH:mm |'>{props.timeNow}</Moment>
    <p><span className={classes.time}>{props.time}</span> {props.name}: {props.value}</p>
    )
}

export default IncomeStatistics;