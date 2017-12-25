import Comments from "./Comments";
import ShowHide from "./ShowHide";

const showHideEl = document.querySelectorAll(".Show-hide");

for (let i =0 ; i < showHideEl.length; i++) {
    const commentsEl = showHideEl[i].querySelector(".Comments");
    let comment;

    if (commentsEl) {
        comment = new Comments(commentsEl);
    }

    let toggler = new ShowHide(showHideEl[i]);

    toggler.onHide = (container) => {
        comment.hideAllCommentsExceptFirst();
    }

}
