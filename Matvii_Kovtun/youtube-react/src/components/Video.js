import React from 'react';
import '../style/Video.css'


const Video = ({name}) => (
    <article class="video">
        <img class="video__img"/>
        <h3 class="video__title">{name}</h3>
        <aside>
            <address>
                <a class="video__details" href="#">Lorem ipsum dolor.</a>
            </address>
            <span class="video__views">Lorem ipsum dolor.</span>
            <time></time>
        </aside>
    </article>
)


export default Video;