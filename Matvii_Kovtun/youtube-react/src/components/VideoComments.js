import React, {Component} from 'react';
import "../style/VideoComments.less";
import VideoAddComment from './VideoAddComment';


class VideoComments extends Component {
    render() {
        return [<VideoAddComment/>,
            <div className="video-comments">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,rerum!
            </div>];
    }
}


export default VideoComments;