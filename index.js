
let newCount = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    newCount.textContent = count;
    console.log(count);
}

function save() {
    let newSaveCount = ` ${count} -`;
    saveEl.textContent += newSaveCount;
    newCount.textContent = 0;
    count = 0;
}

