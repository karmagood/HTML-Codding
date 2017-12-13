import React, {Component} from 'react';
import '../style/VideoComment.less';
import data from '../data/comments.json';


//TODO:Post last written comment
class VideoComment extends Component {
    render() {

        return (
            <div className="video-comment">
                {data.Comments.map(({userLogo, userName, publishDate, comment}, i) =>
                    [
                        <img className="video-comment__user-logo" src={userLogo}/>,
                        <div className="video-comment__info">
                            <div className="video-comment__author">{userName}</div>
                            <div className="video-comment__published-date">{publishDate}</div>
                            <span className="video-comment__comment">{comment}</span>
                        </div>
                    ])}
            </div>
        );
    }
}


export default VideoComment;