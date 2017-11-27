import React, {Component} from 'react';
import '../style/Video.less'
import Link from './Link';

class Video extends Component {
    render() {
        const {title, videoViews, img, time, channel, id} = this.props;
        return (
            <article className="video">
                <Link className="video__link" href={"/video/" + id} >
                    <img className="video__img" src={img}/>
                </Link>
                <h3 className="video__title"><Link className="video__link" href={"video/" + id}>{title}</Link></h3>
                <aside>
                    <address>
                        <a className="video__details" href="/">{channel}</a>
                    </address>
                    <span className="video__views">{videoViews}</span>
                    <time className="video__date">{time}</time>
                </aside>
            </article>)
    }
}

export default Video;