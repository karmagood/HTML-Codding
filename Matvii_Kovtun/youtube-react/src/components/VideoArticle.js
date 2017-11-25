import React, {Component} from 'react';
import '../style/VideoArticle.less';


class VideoArticle extends Component {
    render() {
        return (
            <article className="video-article">
                <div style={{background:"black", width:"100%", height:"400px"}}></div>
                <h2 className="video-article__title">How Bill Gates reads books</h2>
                <aside className="video-article__options">Lorem ipsum dolor sit amet.</aside>
                <aside className="video-article__description">Lorem ipsum dolor sit amet.</aside>
            </article>

        )
    }
}


export default VideoArticle;