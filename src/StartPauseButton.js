import React, { Component } from 'react';

class StartPauseButton extends Component {
    render() {
        let text = "Start";

        if (this.props.isRunning) {
            text = "Pause";
        }

        return <button type="button" onClick={this.props.onStartOrPause} >{text}</button>;
    }
}

export default StartPauseButton;
