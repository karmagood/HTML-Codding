import mustache from "mustache"
import {makeTextareaResizable} from "./DOMutils";
import initPosts from "./posts"



(async () => {
    document.body.innerHTML = mustache.render (
        await(await fetch("templates/index.mustache")).text()   ,
        await (await fetch("http://localhost:3004/db")).json()
    )

    const textAreas = document.querySelectorAll("textarea");

    makeTextareaResizable(textAreas);
    initPosts();
})()


