//1




//2
function camelize(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()).replace(/^-/, '');
}


console.log(camelize("background-color"));

console.log(camelize("list-style-image"));



//3
function unique_elements(arr) {
    return [...new Set(arr)];
}

let strings = ["React Js", "JavaScript", "React Js", "JavaScript","JavaScript", "JavaScript", "React Js", "React Js"];

console.log(unique_elements(strings)); // Output: ['React Js', 'JavaScript']



//4
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);


