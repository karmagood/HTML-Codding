import Layout from "./Layout";

new Layout()
    .render()
    .then( html => document
        .getElementById("application")
        .innerHTML = html
    )
