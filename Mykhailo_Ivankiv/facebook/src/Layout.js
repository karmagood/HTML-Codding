import Articles from "./Articles";

class Layout {
    constructor () {
        this.data = fetch("data/application.json")
            .then (response=> response.json());
    }

    render () {
        return Promise.all([
            this.data,
            new Articles().render()

        ])
        .then ( ([data, articleHTML]) => `
            <section>
                <h1 class="Layout">${data.user.name} : ${data.user.age}</h1>
                ${articleHTML}
            </section>
            `
        );
    }
}

export default Layout;