let data = [];

const getData = async () => {
    let response = await fetch("http://localhost:3000/users");
    data = await response.json();
    render(data);
}

const render  = (data) => {
    document.getElementById("users").innerHTML = data.map( user => `
        <h2>${user.name} - ${user.age}
            <button class="remove" userid="${user.id}">Remove</button>
        </h2>
    `).join("")
};

document.getElementById("users")
    .addEventListener("click", async (ev) => {
        const button = ev.target;
        if (button.classList.contains("remove")) {
            const id = button.getAttribute("userid");
            await  fetch("http://localhost:3000/users/" + id, {method: "DELETE"});

            const index = data.findIndex( (el) => el.id == id);
            data = data.slice(0,index).concat(data.slice(index+1));
            render(data);
        }
    })

getData();
render(data);

document.getElementById("addUser")
    .addEventListener("submit", async (ev) => {
        ev.preventDefault();

        let form = ev.target;
        let name = form["name"].value;
        let age = form["age"].value;

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name, age})
        })

        const user =  await response.json();

        data.push(user);
        render(data);
    });