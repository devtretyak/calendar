import React, { Component } from 'react';
import { string } from 'prop-types';

import Styles from './styles.scss';

export default class Day extends Component {

    static propTypes = {
        title:      string.isRequired,
    };

    render () {

        const { title, selected, strong, grey } = this.props;

        return (
            <div className = {Styles.day} >

                <div className = { selected
                    ? Styles.selected
                    : ''
                }>
                    <span className = { strong
                        ? Styles.strong : grey ? Styles.gray : ''
                    }

                    >{ title }</span>
                </div>

            </div>
        );
    }
}