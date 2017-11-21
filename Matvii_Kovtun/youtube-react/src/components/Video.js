import React from 'react';
import '../style/Video.less'


const Video = ({title, videoViews, img, time, channel}) => (
    <article class="video">
        <img class="video__img" src={img}/>
        <h3 class="video__title">{title}</h3>
        <aside>
            <address>
                <a class="video__details" href="#">{channel}</a>
            </address>
            <span class="video__views">{videoViews}</span>
            <time class="video__date">{time}</time>
        </aside>
    </article>
)


export default Video;