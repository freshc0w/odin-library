const addBtn = document.querySelector('.addBtn');
const closeBtn = document.querySelector('.closeBtn');
const submitBtn = document.querySelector('.submitBtn')
const content = document.querySelector('.content');
const form = document.querySelector('.input');
let myLibrary = [];

// function addCard() {
//     let card = document.createElement('div');
//     card.classList.add('card');
    
//     // We can appendChild the contents of the book info here.
//     card.textContent = 'Something5';
//     content.insertBefore(card, content.firstChild);
// }



function drawGrid() {
    // Clear all cards before drawing grid.
    while(content.firstChild !== form) {
        content.removeChild(content.firstChild)
    }

    for(let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div')
        card.classList.add('card');
        card.textContent = myLibrary[i].name
        content.insertBefore(card, content.firstChild);
    }
}

function Book(name) {
    this.name = name
}

function addBookToLibrary(name) {
    let book = new Book(name)
    myLibrary.push(book)
    console.log(myLibrary)
}

// Stuff to do with forms
const title = document.querySelector('.title')

// Submit info
submitBtn.addEventListener("click",
submitInfo)

function submitInfo(event) {
    let bookTitle = document.getElementById('title').value;
    addBookToLibrary(bookTitle)
    drawGrid();
    form.style.visibility = 'hidden'; 

    event.preventDefault();
}

// Pop up form.
addBtn.addEventListener("click", () => {
    form.style.visibility = 'visible';
});

// Close form
closeBtn.addEventListener("click",
closeForm);

function closeForm(event) {
    form.style.visibility = 'hidden';
    event.preventDefault();
}


