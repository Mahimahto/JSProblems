// const string = "the revolution will not be televised";
// console.log(string);

// const name = "manisha"

// const button = document.querySelector("button");

// function greet () {
//     const name = prompt("what is your name?");


// const greeting = document.querySelector("#greeting");

// greeting.textContent = `hello ${name}, nice to see you!`;
// }

// button.addEventListener("click",greet);

//reverseString:-
function reverseString(str) {
    let newstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    console.log(newstr);
}

reverseString("manisha")
reverseString("neha")
