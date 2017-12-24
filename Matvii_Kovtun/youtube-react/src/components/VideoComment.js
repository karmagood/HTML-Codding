import React, {Component} from 'react';
import '../style/VideoComment.less';


//TODO:Post last written comment
class VideoComment extends Component {
    render() {
        const {userLogo, userName, publishDate, comment} = this.props;
        return (
            <div className="video-comment">
                <img className="video-comment__user-logo" src={userLogo}/>,
                <div className="video-comment__info">
                    <div className="video-comment__author">{userName}</div>
                    <div className="video-comment__published-date">{publishDate}</div>
                    <span className="video-comment__comment">{comment}</span>
                </div>
            </div>
        );
    }
}


export default VideoComment;