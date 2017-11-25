import React, {Component} from 'react';
import "../style/VideoArticle.less";



class VideoArticleInfo extends Component {
    render() {
        return (
            <aside className="video-article__info">
                <span className="video-article__views">7 211 316 просмотро</span>
                <div className="video-article__option">
                    <a href="" className="option__section">
                        <button className="option__button option__button_like">Like</button>
                    </a>
                    <a href="" className="option__section">
                        <button className="option__button option__button_dislike">Dislike</button>
                    </a>
                    <a href="" className="option__section">
                        <button className="option__button option__button_share">Share</button>
                    </a>
                    <button className="option__button option__button_add">Add</button>
                    <button className="option__button option__button_more">More</button>
                </div>
            </aside>);
    }
}


export default VideoArticleInfo;