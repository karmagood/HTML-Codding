const fetchData = (url) => new Promise( (res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = ( ) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.response);
                res(data);
            }
            if (xhr.status === 404) { rej(new Error("Aaaaaaa!"));}
        }
    };

    xhr.send();
})

const addArticle2 = (data) =>
    document.getElementById("content").innerHTML += `
    <article>
        <h2>${data.title}</h2>    
    </article>
    `

const clickHandler2 = () =>
    fetchData("data/articles.json")
        .then ( articlesId => Promise.all( articlesId.map ( fetchData)) )
        .then ( articles => articles.map(addArticle2) )

const clickHandler3 = () =>
    fetch("data/articles.json")
        .then ( response => response.json() )

        .then ( ids => {
            console.log(ids);
            return Promise.all (
                ids.map ( id =>
                    fetch(id)
                        .then( r => r.json())
                )
            )
        })
        .then ( articles => console.log(articles));

        // .then ( articlesId => Promise.all( articlesId.map ( fetchData)) )
        // .then ( articles => articles.map(addArticle2) )


document
    .getElementById("magic")
    .addEventListener("click", clickHandler3, false);