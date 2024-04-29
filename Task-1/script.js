let ededler = [14, 2, 67, 4, 6, 6, 49, 8, 19];
let uzunluq = ededler.length;

let ortaIndex;
if (uzunluq % 2 === 0) {
    ortaIndex = uzunluq / 2 - 1; 
} else {
    ortaIndex = Math.floor(uzunluq / 2); 
}
console.log("Ededin ortasi:", ededler[ortaIndex]);

