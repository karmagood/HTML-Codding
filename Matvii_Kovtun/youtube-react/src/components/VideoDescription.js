import React, {Component} from 'react';
import '../style/VideoDescription.less';

class VideoDescription extends Component {
    render() {
        return (
            <aside className="video-description">
                <div className="video-description__header">
                    <img src="https://yt3.ggpht.com/-IPOer-Fbz-Y/AAAAAAAAAAI/AAAAAAAAAAA/8NAHhG3Ho9s/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt=""
                         className="video-description__channel-logo"/>
                    <div className="video-description__channel-info">
                        <span className="video-description__channel-title">Dj Drop G - Deep House</span>
                        <span className="video-description__published">Published: 24 april 2017</span>
                    </div>
                    <button className="video-description__button-subscribe">Subscribe 510k</button>
                </div>
                <div className="video-description__video-details">
                    Video Details
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Dignissimos ea eaque eius, impedit in, incidunt minima mollitia, quo quod recusandae reprehenderit
                    sed totam ullam. Architecto aut beatae, culpa deserunt eaque eligendi, facilis laborum nesciunt
                    perferendis, praesentium quis quod recusandae totam. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Accusantium, atque consectetur cumque delectus dolorum eaque esse est expedita
                    illo labore laboriosam necessitatibus nobis non, numquam odio omnis optio quaerat quasi ratione sint
                    suscipit temporibus totam velit. Ab at consectetur ea eveniet libero nesciunt officia praesentium
                    quis quod, repellat, repudiandae sed.
                </div>
            </aside>
        )
    };
}


export default VideoDescription;