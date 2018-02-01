import React, { Component } from 'react';

import Styles from './styles';

import Calendar from '../../components/Calendar';

export default class App extends Component {

    render () {
        return (
            <section className = { Styles.app }>
                <Calendar/>
            </section>
        );
    }
}
