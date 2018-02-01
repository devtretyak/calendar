import React, { Component } from 'react';
import { string } from 'prop-types';
import moment from 'moment';

import Day from '../Day';

import Styles from './styles.scss';

export default class Month extends Component {

    static propTypes = {
        selectedDay:            string.isRequired,
        startOfMonthWeekDay:    string.isRequired,
        endOfMonthWeekDay:      string.isRequired,
        lengthOfMonth:          string.isRequired
    };

    render () {

        const { selectedDay, startOfMonthWeekDay, endOfMonthWeekDay, lengthOfMonth } = this.props;

        var weekHeading = [];

        var starOfWeek = moment().clone().startOf('week');

        for (var i = 0; i < 7; i++) {
            weekHeading.push(starOfWeek.add('days', 1).format('ddd'));
        }

        const heading = weekHeading.map((item) => (
            <Day
                title = { item }
                strong
            />
        ));

        var week = [] ;
        var month = [];

        if (parseInt(startOfMonthWeekDay, 10) > 1) {
            for (var i = 1; i < parseInt(startOfMonthWeekDay, 10); i++) {
                week.push('');
            }
        }

        for (i = 1; i <= lengthOfMonth; i++) {

            if (week.length !== 0 && (week.length % 7) == 0) {
                month.push(week);
                week = [];
                week.push(`${i}`);
            } else {
                week.push(`${i}`);
            }
        }

        if (week.length < 7) {
            for (var j = 1; j < 7 - week.length; j++) {
                week.push('');
            }
            month.push(week);
        }

        const weeks = month.map((week) => (
            <div className = { Styles.week }>
                {week.map((day) => (
                    <Day
                        title = { day }
                        selected = {selectedDay == day}
                    />
                ))}
            </div>
        ));

        return (
            <section>
                <div className = { Styles.week } >
                    {heading}
                </div>
                {weeks}
            </section>
        );
    }
}