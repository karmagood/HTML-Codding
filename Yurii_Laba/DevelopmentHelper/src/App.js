import handlerbar from "handlebars/dist/handlebars"

const renderBlock = (block, data) => {
    let templateSrc = `blocks/${block}/${block}.handlebars`;
    localStorage.setItem("block", block);
    localStorage.setItem("data", data);

    let dataSrc = "";

    if (data.trim()) {
        dataSrc = `data/${data}.json`;
    } else {
        dataSrc = `blocks/${block}/${block}.json`
    }

    let styleSrc = `blocks/${block}/${block}.css`;

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
            }),
        fetch(styleSrc)
            .then((response) => {
                return response.text();
            })

    ])
        .then((result) => {
            const data = result[0];
            const template = result[1];
            const styles = result [2];

            return [template(data), styles]

        })
        .then(([html, styles]) => {
            let styleSheet = document.createElement ("style");
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);

            document.getElementById("payload").innerHTML = html;
        })
}

const setInitData = () => {
    const block = localStorage.getItem("block");
    const data = localStorage.getItem("data");

    const form = document
        .querySelector(".developer-helper");

    form.templateSrc.value = block;
    form.dataSrc.value = data;

    if (block) {
        renderBlock(block, data);
    }
};

setInitData();


const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const block = form.templateSrc.value;
    const data = form.dataSrc.value;

    renderBlock(block, data)

};

document
    .querySelector(".developer-helper")
    .addEventListener("submit", submitHandler);