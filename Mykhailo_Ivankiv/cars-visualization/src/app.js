import * as d3 from "d3";
import {Currency, Size} from "./utils";

const toNumber = a => a.trim() === "*" ? null : Number(a);
const toBoolean = a => a === "0" ? false : true;

d3.formatDefaultLocale({
    "decimal": ".",
    "thousands": " ",
    "grouping": [3],
    "currency": ["$", ""]
})
const format = d3.format("$,");

function cell (d) {
    const ctx = d3.select (this);

    switch ( typeof d) {
        case "boolean" : {
            const cell = ctx.append("div")
            if(d) {
                cell.attr("class", "Cell Cell_boolean_true")
            } else {
                cell.attr("class", "Cell Cell_boolean_false")
            }
            return;
        }
        case "object" : {
            if (d instanceof Currency) {
                ctx
                    .append("span")
                    .attr("class", "Cell Cell_currency")
                    .text (format(d.dollars()));
                return;
            }

            if (d instanceof Size) {
                ctx
                    .append("span")
                    .attr("class", "Cell Cell_size")
                    .text ( d3.format(".2")(d.meter() ));
                return;
            }
        }
        default : {
            ctx.text (d);
            return;
        }
    }


}

(async () => {
    let  data = await (await fetch ("data/04cars.dat")).text();
    data = data
        .split("\n")
        .map( string => [
            string.slice(1, 46).trim(),          // 1- 45	Vehicle Name

            toBoolean(string.slice(47, 48)),       // 48		Sports Car? (1=yes, 0=no)
            toBoolean(string.slice(49, 50)),       // 49		Sport Utility Vehicle? (1=yes, 0=no)
            toBoolean(string.slice(51,52)),        // 51		Wagon? (1=yes, 0=no)
            toBoolean(string.slice(53,54)),        // 53		Minivan? (1=yes, 0=no)
            toBoolean(string.slice(55,56)),        // 55		Pickup? (1=yes, 0=no)
            toBoolean(string.slice(57,58)),        // 57		All-Wheel Drive? (1=yes, 0=no)
            toBoolean(string.slice(59,60)),        // 59		Rear-Wheel Drive? (1=yes, 0=no)

            new Currency().dollars(toNumber(string.slice(61, 67))) ,        // 61- 66	Suggested Retail Price, what the manufacturer thinks the
                                                   //         vehicle is worth, including adequate profit for the
                                                   //         automaker and the dealer (U.S. Dollars)
            new Currency().dollars(toNumber(string.slice(68, 74))),        // 68- 73	Dealer Cost (or "invoice price"), what the dealership pays
                                                   // the manufacturer (U.S. Dollars)
            toNumber(string.slice(75, 78)),        // 75- 77	Engine Size (liters)
            toNumber(string.slice(79, 81)),        // 79- 80	Number of Cylinders (=-1 if rotary engine)
            toNumber(string.slice(82, 85)),        // 82- 84	Horsepower
            toNumber(string.slice(86, 88)),        // 86- 87	City Miles Per Gallon
            toNumber(string.slice(89, 91)),        // 89- 90	Highway Miles Per Gallon
            toNumber(string.slice(92, 96)),        // 92- 95	Weight (Pounds)
            new Size().inches(toNumber(string.slice(97, 100))),        // 97- 99	Wheel Base (inches)
            new Size().inches(toNumber(string.slice(101,104))),        // 101-103	Length (inches)
            new Size().inches(toNumber(string.slice(105,107))),        // 105-106	Width (inches)
        ])
        .map ( ([
                    vehicle_name,
                    sports_car,
                    sport_utility_vehicle,
                    wagon,
                    minivan,
                    pickup,
                    all_wheel_drive,
                    rear_wheel_drive,
                    retail_price,
                    dealer_cost,
                    engine_size,
                    number_of_cylinders,
                    horsepower,
                    city_miles,
                    highway_miles,
                    weight,
                    wheel_base,
                    length,
                    width
                ]) => ({
            vehicle_name,
            sports_car,
            sport_utility_vehicle,
            wagon,
            minivan,
            pickup,
            all_wheel_drive,
            rear_wheel_drive,
            retail_price,
            dealer_cost,
            engine_size,
            number_of_cylinders,
            horsepower,
            city_miles,
            highway_miles,
            weight,
            wheel_base,
            length,
            width
        }));

    const table = d3
        .select("#app")
        .append("table")

    const row = table
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr")

    row
        .selectAll("td")
        .data( d => Object.values(d))
        .enter()
        .append("td")
        .each( cell )

})()


const a = 11;

