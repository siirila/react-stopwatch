import React, { Component } from 'react';
import Button from './Button';

class StartPauseButton extends Component {
    render() {
        let text = "Start";

        if (this.props.isRunning) {
            text = "Pause";
        }

        return <Button onClick={this.props.onStartOrPause} color="primary">{text}</Button>;
    }
}

export default StartPauseButton;
