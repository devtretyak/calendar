//Core
import React, { Component } from 'react';
import { string } from 'prop-types';


export default class Today extends Component {

    static propTypes = {
        date:  string.isRequired,
        time:  string.isRequired
    };

    render () {

        const { date, time } = this.props;

        return (

            <div>
                Today:<br/>
                {date}<br/>
                {time}<br/>
            </div>
        );
    }
}