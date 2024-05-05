// javascript

// let firstBatch = 10
// let secondBatch = 20

// let count = firstBatch + secondBatch

// console.log(count)
// let countEl = document.getElementById("count-el")

// // console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

//  function save() {
//      console.log(count)
//  }
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let myVar = count + " - "
    saveEl.textContent += myVar
    count = 0
    countEl.textContent = 0    
}

function refresh() {
     location.reload()
}