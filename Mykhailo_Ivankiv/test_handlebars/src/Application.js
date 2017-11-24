import Handlebars from "handlebars/dist/handlebars";

import navigation from "./navigation";
import search from "./search";

fetch("/templates/Layout.handlebars")
    .then ( response => response.text() )
    .then ( templateString => Handlebars.compile(templateString) )

    .then ( template => {
        Promise.all([
            search,
            navigation
        ])
            .then ( ([search, navigation]) => {

                fetch("/data/application.json")
                    .then( response => response.json())
                    .then ( data => {

                        document.body.innerHTML = template({
                            header : navigation({userName: "Michael"}),
                            aside: search({}),
                            payload: search({})

                        });
                    } )
            })

    });


