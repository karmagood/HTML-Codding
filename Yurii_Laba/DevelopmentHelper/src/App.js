import handlerbar from "handlebars"

const submitHandler = (event) => {
    event.preventDefault();

    let templateSrc = "templates/" + event.target.templateSrc.value + ".handlebars";
    let dataSrc = "data/" + event.target.dataSrc.value + ".json";

    Promise.all([
        fetch(dataSrc)
            .then((response) => {
                return response.json()
            }),

        fetch(templateSrc)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                return handlerbar.compile(text);
            })
    ])
        .then((result) => {
            const data = result[0];
            const template = result[1];
            return template(data)

        })
        .then((html) => {
            document.getElementById("payload").innerHTML = html;
        })


};

document
    .querySelector(".developer-helper")
    .addEventListener("submit", submitHandler);





