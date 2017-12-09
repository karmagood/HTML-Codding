import React, {Component} from 'react';
import "../style/VideoNextVideoPreview.less"


class VideoNextVideoPreview extends Component {
    // TODO: rename, refactor to next-videos__video
    render() {
        return (
            <article className="video-next-video-preview">
                <img className="video-next-video-preview__img"
                     src="https://i.ytimg.com/vi/S0_3QUclMR0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCH-olcxNK0PmrBh340Z8som7o0LA"
                     alt=""/>
                <div className="video-next-video-preview__info">
                    <h3 className="video-next-video-preview__tittle">Deep House</h3>
                    <span className="video-next-video-preview__channel-tittle">Music Trap</span>
                    <span className="video-next-video-preview__views">539k views</span>
                </div>
            </article>
        );
    }
}


export default VideoNextVideoPreview;