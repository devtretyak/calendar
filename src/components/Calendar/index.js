import React, { Component } from 'react';
import moment from 'moment';

import Today from '../Today';
import Month from '../Month';

export default class Calendar extends Component {

    state = {
        currentDate:       moment().format('D MMMM, YYYY'),
        currentTime:       moment().format('H:mm:ss'),
        selectedDay:       moment().format('D'),

        startOfMonthWeekDay:    moment().startOf('month').format('E'),
        endOfMonthWeekDay:      moment().endOf('month').format('E'),
        lengthOfMonth:          moment().endOf('month').format('DD')
    };

    constructor() {
        super();
        this.getCurrentTime = ::this._getCurrentTime;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount () {
        this.interval = setInterval(() => this.getCurrentTime(), 1000);
    }

    _getCurrentTime() {
        this.setState(() => ({
            currentDate: moment().format('D MMMM, YYYY'),
            currentTime: moment().format('H:mm:ss')
        }));
    }

    render () {

        return (
            <section>
                <Today
                    date = { this.state.currentDate }
                    time = { this.state.currentTime }
                />
                <Month
                    selectedDay         = { this.state.selectedDay }
                    startOfMonthWeekDay = { this.state.startOfMonthWeekDay }
                    endOfMonthWeekDay   = { this.state.endOfMonthWeekDay }
                    lengthOfMonth       = { this.state.lengthOfMonth }
                />
            </section>
        );
    }
}