/**
 * Created by bogdan on 05.11.17.
 */
import React from 'react';

import VideoRow from '../../components/video.row/VideoRow.Component';

// css styles
import './Main.Component.css'

// images
// import logo from '../../logo.svg';


class Main extends  React.Component{
    render(){
        return (
            <main className="Main">
                <VideoRow/>
            </main>
        );
    }
}

export default Main;