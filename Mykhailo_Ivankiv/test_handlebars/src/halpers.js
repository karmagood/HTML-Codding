import Handlebars from "handlebars/dist/handlebars";
export const getTemplate = (url) =>
    fetch(url)
        .then ( response => response.text() )
        .then ( templateString => Handlebars.compile(templateString) )