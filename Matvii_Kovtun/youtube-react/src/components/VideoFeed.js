import React, {Component} from 'react';
import '../style/VideoFeed.less';
import NextVideo from "./NextVideo";
import videofeed from "../data/videofeed";
import AutoplaySwitch from "./AutoplaySwitch";


class NextVideos extends Component {
    render() {
        return (
            <section className="video-feed">
                <div className="video-feed__autoplay">
                    <div className="video-feed__header">
                        <h3 className="video-feed__title">Next video</h3>
                        <AutoplaySwitch/>
                    </div>
                    {videofeed.map(({videoTitle, videoImage, videoViews, videoChannelTittle}) =>
                        <NextVideo {...{videoTitle, videoImage, videoViews, videoChannelTittle}}/>)}

                </div>
                <div className="video-feed__video">
                </div>
            </section>
        )
    }
}


export default NextVideos;