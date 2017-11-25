import React, {Component} from 'react';
import '../style/VideoDescription.less';

class VideoDescription extends Component {
    render() {
        return (
            <aside className="video-description">
                <div className="video-description__header">
                    <img src="https://img.youtube.com/vi/1eTj_TGJMvw/0.jpg" alt=""
                         className="video-description__channel-logo"/>
                    <div className="video-description__channel-info">
                        <span className="video-description__channel-title">Dj Drop G - Deep House</span>
                        <span className="video-description__published">Published: 24 april 2017</span>
                    </div>
                </div>
            </aside>
        )
    };
}


export default VideoDescription;