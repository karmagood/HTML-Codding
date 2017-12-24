import mustache from "mustache"

export default () => {
let createForm = document.getElementById("create-post");
createForm.addEventListener('submit', handleCreatePost, false);

async function handleCreatePost(event) {
    event.preventDefault();
    const description = createForm.description.value;
    const data = {
        "profile-picture-url": "../images/home-image-4.jpg",
        "profile-url": "#",
        "profile-name": "Dima Artin",
        "user-action": "додав нову світлину",
        "time-info": "3 години",
        "main-post-info": description,
        "post-images-url": "../images/p-stockholm-fashion-destination-last-iceland-sunshine-500x380.jpg"
    };

    await fetch("http://localhost:3004/posts", {
        method: 'POST', body: JSON.stringify(data), headers: {
            "Content-type": "application/json"
        }

    })

    const templateString =await (await fetch ("templates/post.mustache")).text();
    const postEl = document.createElement("div");
    postEl.innerHTML= mustache.render(templateString, data);
    let newsFeed = document.getElementById("news-feed");
    newsFeed.insertBefore(postEl, newsFeed.firstChild);

}
}

