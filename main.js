const addBtn = document.querySelector('.addBtn');
const content = document.querySelector('.content')
let myLibrary = [];

// function addCard() {
//     let card = document.createElement('div');
//     card.classList.add('card');
    
//     // We can appendChild the contents of the book info here.
//     card.textContent = 'Something5';
//     content.insertBefore(card, content.firstChild);
// }

function drawGrid() {
    for(let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        card.classList.add('card');
        card.textContent = myLibrary[i].name
        content.appendChild(card);

    }
}


function Book(name) {
    this.name = name
}

function addBookToLibrary(name) {
    let book = new Book(name)
    myLibrary.unshift(book)
    console.log(myLibrary)
}

