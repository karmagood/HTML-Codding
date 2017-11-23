import Handlebars from "handlebars/dist/handlebars";


fetch("/templates/greeting.handlebars")
    .then ( response => response.text() )
    .then ( templateString => Handlebars.compile(templateString) )

    .then ( template => {

        fetch("/data/test.json")
            .then( response => response.json())
            .then ( data => document.body.innerHTML = template(data) )

    });


