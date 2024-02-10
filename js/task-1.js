const item = document.querySelectorAll(".item");
console.log(`Number of categjries ${item.length}`);

item.forEach((list) => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(`Ellements: ${list.lastElementChild.childElementCount}`)
})