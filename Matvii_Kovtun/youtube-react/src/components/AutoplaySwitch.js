import React, {Component} from 'react';
import "../style/AutoplaySwitch.less";


class AutoplaySwitch extends Component {
    render() {
        return (
            <label className="autoplay-switch">
                <input className="autoplay-switch__input" type="checkbox"></input>
                <span className="autoplay-switch__slider"> Autoplay</span>
            </label>
        );
    }
}


export default AutoplaySwitch;