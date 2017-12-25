class ShowHide {
    constructor (container)  {
        const toggler = container.querySelector(".Show-hide__toggle");

        if (toggler) {
            toggler.addEventListener("click",  () => {
                if (container) {
                    const content = container.querySelector(".Show-hide__content")

                    if (content) {
                        if (content
                                .classList.contains("Show-hide__content_hidden")) {
                            this.onShow(container);
                        } else {
                            this.onHide(container);
                        }

                        content
                            .classList
                            .toggle("Show-hide__content_hidden")
                    }
                }

            })
        }
    };

    onHide ()  {}
    onShow () {}
}



export default ShowHide;