const HAXADECIMAL_LETTERS = '0123456789ABCDEF';

export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const getRandomColor = () => {
        return '#' + Array(6)
            .fill()
            .map(() => HAXADECIMAL_LETTERS[getRandom(0, 16)])
            .join("")
    }
;


