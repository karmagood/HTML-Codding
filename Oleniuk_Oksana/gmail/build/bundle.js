/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
                    <div id="right">            <button class="remove" userid="${user.id}" src="images/bin.svg"></button>
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

/***/ })
/******/ ]);