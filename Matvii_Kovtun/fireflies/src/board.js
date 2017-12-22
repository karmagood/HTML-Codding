import {getRandom} from "./utils";
import Firefly from './Firefly';
import {without} from 'ramda';


const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext('2d');
const {height, width} = canvas.getBoundingClientRect();
canvas.height = height;
canvas.width = width;

const fireflies = new Array(getRandom(600, 600))
    .fill()
    .map(() =>
        new Firefly(getRandom(0, width), getRandom(0, height), getRandom(1, 10)));

const animate = () => {
    let f = [];

    for (let i = 0; i < fireflies.length; ++i){
        let need = true;
        for (let j = 0; j < f.length; ++j){
            if (fireflies[i].x == f[j].x && fireflies[i].y == f[j].y){
                need = false;
                break;
            }
        }
        if (need) f.push(fireflies[i]);
    }
    // fireflies = f.slice();
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(animate);

    fireflies.map((el) => {
        el.move(fireflies);
        el.draw(ctx);
    });

};

animate();



