import React, {Component} from 'react';
import '../style/VideoArticle.less';
import VideoArticleInfo from './VideoArticleInfo';
import VideoArticleDescription from './VideoArticleDescription';


class VideoArticle extends Component {
    render() {
        return (
            <div>
                <div style={{background: "black", width: "100%", height: "400px"}}></div>
                <article className="video-article">
                    <h1 className="video-article__title">Summer Special Amazing Mix 2017 - Best Of Deep House Sessions
                        Music 2017 Chill Out Mix by Drop G</h1>
                    <VideoArticleInfo/>
                    <VideoArticleDescription/>
                </article>
                <div className="comments">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rerum!</div>
                <div className="next-videos" style={{position:"absolute", background: "black", left:"70%", width: "100%", height: "400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum
                    fuga molestiae, nemo nostrum similique!
                </div>
            </div>
        )
    }
}


export default VideoArticle;