let data = [];

const getData = async () => {
    let response = await fetch("http://localhost:3000/emails");
    data = await response.json();
    render(data);
}

const render  = (data) => {
    document.getElementById("emails").innerHTML = data.map( user => `                  
                <div class="inline-flex-container">
                    <div id="left"></div>
                    <div id="medium"><h4>${user.name}</h4></div>
                    <div id="right">
                        <p>
                            <time>12:43</time>
                        </p>
                    </div>
                </div>
                <div class="inline-flex-container">
                    <div id="left"><input type="checkbox" value="1" name=""></input></div>
                    <div id="medium"><p>${user.subject}</p></div>
                    <div id="right"><p>☆</p></div>
                </div>

                <div class="inline-flex-container">
                    <div id="left"></div>
                    <div id="medium">
                        <small>${user.letter}</small>
                    </div>
                    <div id="right">            <button class="remove" userid="${user.id}"></button>
</div>
                </div>


                <hr>

        
    `).join("")
};

document.getElementById("emails")
    .addEventListener("click", async (ev) => {
        const button = ev.target;
        if (button.classList.contains("remove")) {
            const id = button.getAttribute("userid");
            await  fetch("http://localhost:3000/emails/" + id, {method: "DELETE"});

            const index = data.findIndex( (el) => el.id == id);
            data = data.slice(0,index).concat(data.slice(index+1));
            render(data);
        }
    })

getData();
render(data);

document.getElementById("addEmail")
    .addEventListener("submit", async (ev) => {
        ev.preventDefault();

        let form = ev.target;
        let name = form["name"].value;
        let subject = form["subject"].value;
        let letter = form["letter"].value;


        const response = await fetch("http://localhost:3000/emails", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name, subject, letter})
        })

        const user =  await response.json();

        data.push(user);
        render(data);
    });



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("aside-red-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("email-form__close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}