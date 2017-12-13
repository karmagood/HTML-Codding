import React, {Component} from 'react';
import '../style/VideoFeed.less';
import VideoNextVideoPreview from "./VideoNextVideoPreview";


class NextVideos extends Component {
    render() {
        return (
            <section className="next-videos">
                <div className="next-videos__autoplay">
                    <div className="next-videos__header">
                        <h3 className="next-videos__title">Next video</h3>
                        <button className="next-videos__autoplay-toggle">Autoplay</button>
                    </div>
                    <VideoNextVideoPreview/>
                </div>
                <div className="next-videos__video">
                </div>
            </section>
        )
    }
}


export default NextVideos;