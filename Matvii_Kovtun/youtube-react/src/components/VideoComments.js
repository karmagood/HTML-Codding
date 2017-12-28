import React, {Component} from 'react';
import "../style/VideoComments.less";
import VideoAddComment from './VideoAddComment';
import VideoComment from './VideoComment';
import data from '../data/comments.json';


class VideoComments extends Component {
    render() {
        return (<div>
            <VideoAddComment/>
            {data.Comments.map(({userLogo, userName, publishDate, comment}) =>
                <VideoComment {...{userLogo, userName, publishDate, comment}}/>)}
        </div>);
    }
}


export default VideoComments;
