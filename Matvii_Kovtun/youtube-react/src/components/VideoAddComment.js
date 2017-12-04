import React, {Component} from 'react';
import "../style/VideoAddComment.less";


class VideoAddComment extends Component {
    constructor() {
        super();
        this.classes = {acceptButtonStyle: ["video-add-comment__publish-comment"]}
    }

    handleClick() {
        this.setState({a: "just change to make rerender"});
        console.log(this.classes.acceptButtonStyle.join(" "));
        if (this.classes.acceptButtonStyle.includes("video-add-comment__publish-comment_red")) {
            const index = this.classes.acceptButtonStyle.indexOf("video-add-comment__publish-comment_red");
            if (index !== -1) this.classes.acceptButtonStyle.splice(index, 1);
        } else {
            this.classes.acceptButtonStyle.push("video-add-comment__publish-comment_red");
        }
    }


    render() {
        return (
            <section className="video-add-comment">
                <div className="video-add-comment__header">
                    <h2 className="video-add-comment__comments-number">11 comments</h2>
                    <button className="video-add-comment__button-sort">Sort comments</button>
                </div>
                <div className="video-add-comment__main">
                    <img
                        src="https://yt3.ggpht.com/-QrPinFwCTCM/AAAAAAAAAAI/AAAAAAAAAAA/rN5XuKqPQzo/s76-c-k-no-mo-rj-c0xffffff/photo.jpg"
                        alt="" className="video-add-comment__user-logo"/>
                    <textarea name="" id="" cols="30" rows="1"
                              className="video-add-comment__comment-area">Write here</textarea>
                    <div className="video-add-comment__button-section">
                        <button className={this.classes.acceptButtonStyle.join(" ")}
                                onClick={this.handleClick.bind(this)}>Publish comment
                        </button>
                        <button className="video-add-comment__cancel-comment">Cancel</button>
                    </div>

                </div>

            </section>)
    }
}


export default VideoAddComment;