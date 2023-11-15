// 1st 
// function slugify(title) {
//     return title.toLowerCase().replace(/ /g, '-');
// }
// 2d 
// function slugify(title) {
//     let arr = [];
//     for (let i = 0; i < title.length; i++) {
//         arr.push(title[i]);
//         if (arr[i] === ' ') {
//             arr[i] = '-';
//         }
//     }
//     return arr.join('').toLowerCase();

// }
// 3d 
function slugify(title) {
    title = toLowerCase(title);
    const stringArray = title.split(' ');
    for (let i = 0; i < stringArray.length - 1; i++) {
        const dash = "-";
        stringArray[i] = stringArray[i] + dash;
    }
    return stringArray.join('');
}

function toLowerCase(text) {
    return text.toLowerCase();
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

