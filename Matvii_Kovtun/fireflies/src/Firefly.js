import {calcDistance, getRandom} from "./utils";

class Firefly {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.brightness = this.updateBrightness();
        this.vx = 0.01;
        this.vy = 0.01;
    }

    getPath() {
        const path = new Path2D();
        path.arc(this.x, this.y, 5, 0, Math.PI * 2, true); // Outer circle
        return path;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = `rgba(241, 196, 15, ${this.brightness * 0.1})`;
        ctx.fill(this.getPath());
        ctx.restore();
    }

    updateBrightness() {
        let {x, y} = this;
        return -20 * Math.exp(Math.floor(-Math.sqrt(x * x + y * y) / 2) / 5) -
            Math.exp(Math.floor(Math.cos(2 * Math.PI * x + 2 * Math.PI * y) / 2)) + 20 + Math.E;
    };

    move(fireflies) {
        let params = fireflies
            .filter(el => el !== this)
            .reduce((accum, el) => {
                let brightness = el.brightness / calcDistance(this.x, this.y, el.x, el.y);
                if (accum[0] < brightness) return [brightness, el];
                return accum;
            }, [0, undefined]);
        let firefly = params[1];
        let brightness = params[0];

        let dx = this.x - firefly.x;
        let dy = this.y - firefly.y;
        this.x -= dx * this.vx;
        this.y -= dy * this.vy;


        this.brightness = this.updateBrightness();
    }
}


export default Firefly;