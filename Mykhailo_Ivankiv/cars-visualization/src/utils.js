export class Currency {
    dollars (value) {
        if (value) {
            this.value = value;
            this.currency = "$";
            return this;
        } else {
            if (this.currency === "$") {
                return this.value;
            }
        }

    }
}

export class Size {
    inches (value) {
        if (value) {
            this.measurement = "imperial";
            this.value = value;
            return this;
        } else {
            if (this.measurement === "imperial") {
                return this.value
            }
        }
    }
    meter (value) {
        if (value) {
            this.measurement = "metric";
            this.value = value;
            return this;
        } else {
            if (this.measurement === "meter") {return this.value}
            if (this.measurement === "imperial") {return this.value * 0.0254}
        }
    }
}