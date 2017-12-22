import React, {Component} from 'react';
import '../style/VideoFeed.less';
import NextVideo from "./NextVideo";
import videofeed from "../data/videofeed";


class NextVideos extends Component {
    render() {
        return (
            <section className="video-feed">
                <div className="video-feed__autoplay">
                    <div className="video-feed__header">
                        <h3 className="video-feed__title">Next video</h3>
                        <button className="video-feed__autoplay-toggle">Autoplay</button>
                    </div>
                    {videofeed.map(({videoTitle, videoImage, videoViews, videoChannelTittle}) =>
                        <NextVideo {...{videoTitle, videoImage, videoViews, videoChannelTittle}}/>)}
                    <div className="video-feed__border-bottom"></div>
                </div>
                <div className="video-feed__video">
                </div>
            </section>
        )
    }
}


export default NextVideos;