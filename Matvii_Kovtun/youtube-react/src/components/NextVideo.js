import React, {Component} from 'react';
import "../style/NextVideo.less"


class NextVideo extends Component {
    render() {
        const {videoTitle, videoImage, videoViews, videoChannelTittle} = this.props;
        return (
            <article className="next-video__preview">
                <img className="next-video__img"
                     src={videoImage}
                     alt=""/>
                <div className="next-video__info">
                    <h3 className="next-video__tittle">{videoTitle}</h3>
                    <span className="next-video__channel-tittle">{videoChannelTittle}</span>
                    <span className="next-video__views">{videoViews}</span>
                </div>
            </article>
        );
    }
}


export default NextVideo;