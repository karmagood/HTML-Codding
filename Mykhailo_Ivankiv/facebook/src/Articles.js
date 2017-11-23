class Articles {
    constructor () {
        this.data = fetch("data/articles.json")
            .then (response => response.json());
    }

    render () {
        return this.data
            .then( data => data.map(article => `
                <article class="">
                    <h2>${article.title}</h2> 
                    <p>${article.description}</p>
                </article>
            `).join("")
            )
    }
}

export default Articles;