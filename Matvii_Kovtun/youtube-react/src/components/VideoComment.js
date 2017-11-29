import React, {Component} from 'react';
import '../style/VideoComment.less';

//TODO:Post last written comment
class VideoComment extends Component {
    render() {
        return (
            <div className="video-comment">
                <img className="video-comment__user-logo"
                     src="https://yt3.ggpht.com/-DepF80nIc8k/AAAAAAAAAAI/AAAAAAAAAAA/6Q9lGJVBwTA/s76-c-k-no-mo-rj-c0xffffff/photo.jpg"></img>
                <div className="video-comment__info">
                    <div className="video-comment__author">joncito77</div>
                    <div className="video-comment__published-date">7 month ago</div>
                    <span className="video-comment__comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias amet architecto aspernatur beatae dignissimos, distinctio dolore eaque expedita harum id illum maiores minima minus odio praesentium quidem quos soluta.</span>
                </div>
            </div>
        );
    }
}


export default VideoComment;