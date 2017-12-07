import React, {Component} from 'react';
import "../style/VideoComments.less";
import VideoAddComment from './VideoAddComment';
import VideoComment from './VideoComment';

class VideoComments extends Component {
    render() {
        return [
            <VideoAddComment/>,
            <VideoComment/>];
    }
}


export default VideoComments;