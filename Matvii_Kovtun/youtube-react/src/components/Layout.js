import React, {Component} from 'react';
import LayoutHeader from './LayoutHeader';
import UserMenu from './UserMenu';
import LayoutPayload from './LayoutPayload';
import "../style/Layout.less";
import logo from '../images/youtube-logo.jpg'
import VideoArticle from './VideoPage';


class Layout extends Component {
    constructor() {
        super();
        (function (history) {
            var pushState = history.pushState;
            history.pushState = function (state) {
                if (typeof history.onpushstate === "function") {
                    history.onpushstate({state: state});
                }
                // ... whatever else you want to do
                // maybe call onhashchange e.handler
                return pushState.apply(history, arguments);
            }
        })(window.history);
        window.history.onpushstate = () => {
            this.forceUpdate();
        };
        window.onpopstate = () => {
            this.forceUpdate();
        };
    }

    render() {
        let currentPage = window.location.pathname.split("/");
        console.log(currentPage);

        if (currentPage[1] === "")
            return (
                <div className="layout">
                    <header className="layout__header"><LayoutHeader img={logo}/></header>
                    <aside className="layout__user-menu"><UserMenu/></aside>
                    <main className="layout__payload"><LayoutPayload/></main>
                </div>);
        else if (currentPage[1] === "video") {
            let id = currentPage[2];
            return (<div className="layout">
                <header className="layout__header"><LayoutHeader img={logo}/></header>
                <main className="layout__payload layout__payload_video">
                    <VideoArticle/>
                </main>

            </div>);
        }

    }
};


export default Layout;