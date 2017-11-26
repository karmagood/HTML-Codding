import React, {Component} from 'react';
import '../style/VideoArticle.less';
import VideoArticleInfo from './VideoArticleInfo';
import VideoArticleDescription from './VideoDescription';
import NextVideos from './NextVideos';
import VideoComments from './VideoComments';

class VideoArticle extends Component {

    render() {
        //TODO: rename video-article
        //TODO: try removing <div>...</div>
        return (
            <div>
                <div style={{background: "black", width: "100%", height: "400px"}}></div>
                <article className="video-article">
                    <NextVideos/>
                    <h1 className="video-article__title">Summer Special Amazing Mix 2017 - Best Of Deep House Sessions
                        Music 2017 Chill Out Mix by Drop G</h1>
                    <VideoArticleInfo/>
                    <VideoArticleDescription/>
                    <VideoComments/>
                </article>


            </div>
        )
    }
}


export default VideoArticle;