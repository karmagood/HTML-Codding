import React, {Component} from 'react';


class Link extends Component {
    render() {
        const {children, ...prop} = this.props;
        return (
            <a onClick={this.addClickHandler.bind(this)} {...prop}>{children}</a>
        )
    };

    addClickHandler(ev) {
        // console.log(ev.button);
        if (ev.button === 0) {
            ev.preventDefault();
            window.history.pushState({}, "", this.props.href);
        }
    }
}


export default Link;