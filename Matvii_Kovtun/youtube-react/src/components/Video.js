import React, {Component} from 'react';
import '../style/Video.less'


class Video extends Component {
    render() {
        const {title, videoViews, img, time, channel, id} = this.props;
        return (
            <article className="video">
                <a className="video__link" href={"video/" + id} onClick={this.addClickHandler.bind(this)}>
                    <img className="video__img" src={img}/>
                </a>
                <h3 className="video__title"><a className="video__link" href={"video/" + id}
                                                onClick={this.addClickHandler.bind(this)}>{title}</a></h3>
                <aside>
                    <address>
                        <a className="video__details" href="#">{channel}</a>
                    </address>
                    <span className="video__views">{videoViews}</span>
                    <time className="video__date">{time}</time>
                </aside>
            </article>)
    }

    addClickHandler(ev) {
        ev.preventDefault();
        console.log("PISYA");
        window.history.pushState({}, "", "video/" + this.props.id);
    }
}

export default Video;