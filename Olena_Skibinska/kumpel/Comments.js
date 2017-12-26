class Comments {
    constructor (container) {
        this.container = container;
        container
            .querySelector(".Comments__load-more")
            .addEventListener("click", () => {
                this.onShow (container);

                const wrapper = container.querySelector(".Comments__wrapper");

                const hidden = wrapper
                    .querySelectorAll(".Comments__comment_hidden");

                if (hidden.length) {
                    for (let i = 0; i < 2; i++) {
                        if (hidden[i]) {
                            hidden[i]
                                .classList
                                .remove("Comments__comment_hidden")
                        }
                    }

                    if (wrapper.querySelectorAll(".Comments__comment_hidden").length === 0) {
                        container
                            .querySelector(".Comments__load-more")
                            .classList
                            .add("Comments__load-more_hidden")
                    }
                }


            });
    };

    onShow () {}

    hideAllCommentsExceptFirst () {
        const {container} = this;

        const comments = container.querySelectorAll(".Comments__comment");

        for (let i= 1; i< comments.length; i++) {
            comments[i].classList.add("Comments__comment_hidden");
        }

        container
            .querySelector(".Comments__load-more")
            .classList
            .remove("Comments__load-more_hidden")

    }

}

export default Comments;