import React, {Component} from 'react';
import '../style/VideoPage.less';
import VideoInfo from './VideoInfo';
import VideoArticleDescription from './VideoDescription';
import NextVideos from './NextVideos';
import VideoComments from './VideoComments';

class VideoArticle extends Component {

    render() {
        return (
            <section className="video-page">
                <div className="video-page__video"></div>
                <article className="video-page__details">
                    <NextVideos/>
                    <h1 className="video-page__title">Summer Special Amazing Mix 2017 - Best Of Deep House Sessions
                        Music 2017 Chill Out Mix by Drop G
                    </h1>
                    <VideoInfo/>
                    <VideoArticleDescription/>
                    <VideoComments/>
                </article>
            </section>
        )

    }
}


export default VideoArticle;